import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  email: string = ''
  password: string = ''

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  adminLogin(){
    if(this.email == ''){
      alert('Please enter your email');
      return;
    }
    if(this.password == ''){
      alert('Please enter your password');
      return;
    }
    if(this.password == 'ioanaioana' && this.email == 'ioananov@yahoo.ro'){
      this.auth.login(this.email, this.password);
      this.email='';
      this.password='';
    }
    else{
      alert("Access denied!");
    }


  }

}
