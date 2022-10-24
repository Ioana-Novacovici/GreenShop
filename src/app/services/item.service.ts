import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Item} from "../model/item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private afs : AngularFirestore) { }

  addItem(item : Item){
    item.id = this.afs.createId();
    return this.afs.collection('/Items').add(item);
  }

  deleteItem(item : Item){
    return this.afs.doc('/Items/'+item.id).delete();
  }

  getAllItems(){
    return this.afs.collection('/Items').snapshotChanges();
  }

  updateItem(item : Item){
    this.deleteItem(item);
    this.addItem(item);
  }

}
