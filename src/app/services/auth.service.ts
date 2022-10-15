import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loggdeIn = false;
  constructor(private fireauth: AngularFireAuth, private router: Router) { }

  //login method
  login(email: string, password: string){
    this.fireauth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('token', 'true');
      this.router.navigate(['']);
      this.loggdeIn = true;
      console.log(this.loggdeIn);
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
      this.router.navigate(['/login'])
      this.loggdeIn = false;
      console.log(this.loggdeIn);
    }, err =>{
      alert(err.message);
    })
  }

  isLoggdeIn(): boolean{
    return this.loggdeIn;
  }
}
