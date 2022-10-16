import { Component, OnInit } from '@angular/core';
import {Item} from "../../model/item";
import {ItemService} from "../../services/item.service";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  itemsList : Item[] = [];
  button : number;

  constructor(private itemService : ItemService) {
    this.button = 1;
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

    }, err => {
      alert('Error while fetching items data');
    })

  }

  public selectButton(currentButton: number) {
    this.button = currentButton;
  }

  public isButtonSelected(currentButton: number): boolean {
    return this.button === currentButton;
  }

}
