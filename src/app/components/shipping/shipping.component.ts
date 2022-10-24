import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Item} from "../../model/item";
import {Order} from "../../model/order";

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  cartItemList : Item[] = [];
  totalPrice : number = 0;
  cartItemsNumber : number = 0;
  addedOrder : Order ={
    id : '',
    name : '',
    country : '',
    city : '',
    address : '',
    phone : '',
    totalPrice : 0,
    cartItemsNumber : 0,
    cartItems : []
  };

  id: string='';
  name: string='';
  country: string='';
  city: string='';
  address: string='';
  phone: string='';

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

  resetForm(){
    this.id = '';
    this.name = '';
    this.country = '';
    this.city = '';
    this.address = '';
    this.phone = '';
    this.cartItemList = [];
    this.totalPrice = 0;
    this.cartItemsNumber = 0
  }

  addOrder(){
    if(this.name == '' || this.country == '' || this.city == '' || this.phone == '' || this.address == ''){
      alert('Please fill in all input fields!')
      return;
    }

    this.addedOrder.id = '';
    this.addedOrder.name = this.name;
    this.addedOrder.country = this.country;
    this.addedOrder.city = this.city;
    this.addedOrder.phone = this.phone;
    this.addedOrder.address = this.address;
    this.addedOrder.totalPrice = this.totalPrice;
    this.addedOrder.cartItemsNumber = this.cartItemsNumber;
    this.addedOrder.cartItems = this.cartService.cartItemList.slice();
    this.cartService.addOrder(this.addedOrder);
    this.resetForm();
    this.cartService.clearCart();
    alert('Your order was succesfully placed!!');

  }


}
