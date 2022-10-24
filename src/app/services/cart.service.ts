import { Injectable } from '@angular/core';
import {Item} from "../model/item";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  get cartItemList(): Item[] {
    return this._cartItemList;
  }

  get totalPrice(): number {
    return this._totalPrice;
  }

  get cartItemsNumber(): number {
    return this._cartItemsNumber;
  }

  private _cartItemList : Item[] = [];
  private _totalPrice : number = 0;
  private _cartItemsNumber : number = 0;

  constructor() { }



  addToCart(item : Item){
    this._totalPrice += item.price;
    this._cartItemsNumber ++;
    if(this._cartItemList.find((currentItem) => {return currentItem.name == item.name}) == undefined ){
      item.quantity ++;
      this._cartItemList.push(item);
      return;
    }

    this._cartItemList.forEach(currentItem =>{
      if(currentItem.name == item.name){
        currentItem.quantity ++;
        return;

      }
    })
  }

  removeFromCart(item : Item){
    const index = this._cartItemList.findIndex(currentItem => {return item.name == currentItem.name});
    this._cartItemsNumber -= this._cartItemList[index].quantity;
    this._totalPrice -= this._cartItemList[index].price * this._cartItemList[index].quantity;
    this._cartItemList.splice(index, 1);
    console.log(this.cartItemList);
  }

}
