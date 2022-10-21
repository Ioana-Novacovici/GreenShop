import {Component, OnInit} from '@angular/core';
import {ItemService} from "../../services/item.service";
import {Item} from "../../model/item";

@Component({
  selector: 'app-shop-view',
  templateUrl: './shop-view.component.html',
  styleUrls: ['./shop-view.component.css']
})
export class ShopViewComponent implements OnInit {

  itemsList : Item[] = [];
  addedItem : Item = {
    id: '',
    name: '',
    price: 0,
    category: '',
    quantity: 0,
    image: ''
  };
  id : string = '';
  name : string = '';
  price : number = 1;
  category : string = '';
  quantity : number = 0;
  image : string = '';

  constructor(private itemService : ItemService) {
  }

  ngOnInit(): void {
    this.getAllItems();
  }

  getAllItems(){

    this.itemService.getAllItems().subscribe(res => {

      this.itemsList = res.map((e : any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })

    }, () => {
      alert('Error while fetching items data');
    })

  }

  resetForm(){
    this.id = '';
    this.name = '';
    this.price = 0;
    this.category = '';
    this.quantity = 0;
    this.image = '';
  }

  addItem(){
    if(this.name == '' || this.category == ''){
      alert('Please fill in all input fields!')
      return;
    }

    this.addedItem.id = '';
    this.addedItem.quantity = 0;
    this.addedItem.image = '/assets/images/' + this.name + '.png';
    this.addedItem.name = this.name;
    this.addedItem.category = this.category;
    this.addedItem.price = this.price;
    this.itemService.addItem(this.addedItem);
    this.resetForm();
  }

  deleteItem(item: Item){
    if(window.confirm('Are you sure you want to delete product: ' + item.name + '?')){
      this.itemService.deleteItem(item);
    }
  }
}
