import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {User} from "../model/user";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;
  private loggedInAsAdmin = false;
  usersList: User[] = [];
  user: User={email:'', id:'', role: ''};

  constructor(private fireauth: AngularFireAuth, private router: Router, private afs: AngularFirestore) { }

  //login method
  login(email: string, password: string){
    this.user.id = this.afs.createId();
    this.user.email = email;
    this.user.role='client';
    this.afs.collection('/Users').add(this.user);
    this.fireauth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('token', 'true');
      if(password == 'ioanaioana' && email == 'ioananov@yahoo.ro'){
        this.loggedInAsAdmin = true;
        this.router.navigate(['/shopView']);
      }
      else{
        this.router.navigate(['/store/allCategories']);
        this.loggedIn = true;
        console.log(this.loggedIn);
      }

    }, err =>{
      alert(err.message);
      this.router.navigate(['/login'])
    })
  }

  //register method
  register(email: string, password: string){
    this.fireauth.createUserWithEmailAndPassword(email, password).then(() => {
      alert('Registration Succsefull!')
      this.router.navigate(['/login'])
    }, err =>{
      alert(err.message);
      this.router.navigate(['/register'])
    })
  }

  //sign out method
  logout(){
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/store/allCategories'])
      this.loggedIn = false;
      this.loggedInAsAdmin = false;
    }, err =>{
      alert(err.message);
    })
  }

  isLoggedIn(): boolean{
    return this.loggedIn;
  }

  isLoggedInAsAdmin(): boolean{
    return this.loggedInAsAdmin;
  }
}
