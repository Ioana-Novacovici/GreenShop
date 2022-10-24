import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../model/item";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  @Input()
  item : Item = {
    id: '',
    name: '',
    price: 0,
    category: '',
    quantity: 0,
    image: ''
  };

  constructor(private cartService: CartService){
  }

  addToCart(item : Item){
    this.cartService.addToCart(item);


  }

  ngOnInit(): void {
  }


}
