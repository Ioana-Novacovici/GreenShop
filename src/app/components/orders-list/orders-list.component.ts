import { Component, OnInit } from '@angular/core';
import {Order} from "../../model/order";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

  ordersList: Order[] = [];

  getAllOrders(){

    this.cartService.getAllOrders().subscribe(res => {

      this.ordersList = res.map((e : any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })

    }, () => {
      alert('Error while fetching items data');
    })

  }

  shipOrder(order: Order){
    if(window.confirm('Is order for: ' + order.name + ' ready for shipment?')){
      this.cartService.deleteOrder(order);
      alert('The order was shipped!')
    }
  }

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.getAllOrders();
  }

}
