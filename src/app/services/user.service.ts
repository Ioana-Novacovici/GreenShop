import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afs : AngularFirestore) { }

  getAllUsers(){
      return this.afs.collection('/Users').snapshotChanges();
  }

  deleteUser(user : User){
    return this.afs.doc('/Users/'+user.id).delete();
  }
}
