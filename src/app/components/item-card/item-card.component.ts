import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../model/item";

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
  isClicked : boolean;
  quantitySelected : number;

  constructor(){
    this.isClicked = false;
    this.quantitySelected = 1;
  }

  ngOnInit(): void {
  }

  isZero() : boolean{
    console.log(this.quantitySelected);
    return this.quantitySelected==0;
  }

}
