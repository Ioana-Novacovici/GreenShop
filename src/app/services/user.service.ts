import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afs : AngularFirestore) { }

  getAllUsers(){
      return this.afs.collection('/Users').snapshotChanges();
  }
}
