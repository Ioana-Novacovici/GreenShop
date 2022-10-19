import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;
  private loggedInAsAdmin = false;
  constructor(private fireauth: AngularFireAuth, private router: Router) { }

  //login method
  login(email: string, password: string){

    this.fireauth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('token', 'true');
      if(password == 'ioanaioana' && email == 'ioananov@yahoo.ro'){
        this.loggedInAsAdmin = true;
        console.log("logged as admin")
        // this.router.navigate(['/store/allCategories']);
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
