import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Item} from "../../model/item";

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  cartItemList : Item[] = [];
  totalPrice : number = 0;
  cartItemsNumber : number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItemList = this.cartService.cartItemList.slice();
    this.totalPrice = this.cartService.totalPrice;
    this.cartItemsNumber = this.cartService.cartItemsNumber;
  }

  removeFromCart(item : Item){
    if(window.confirm('Are you sure you want to remove from cart: ' + item.name + '?')){
      this.cartService.removeFromCart(item);
      this.cartItemList = this.cartService.cartItemList.slice();
      this.totalPrice = this.cartService.totalPrice;
      this.cartItemsNumber = this.cartService.cartItemsNumber;
    }
  }


  isCartEmpty():boolean{
    return this.cartService.cartItemsNumber == 0;
  }


}
