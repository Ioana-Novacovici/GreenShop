import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {UserService} from "../../services/user.service";
import {User} from "../../model/user";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  email: string = ''
  password: string = ''
  usersList : User[] = [];
  constructor(private auth: AuthService, private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {

    this.userService.getAllUsers().subscribe(res => {

      this.usersList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })

    }, () => {
      alert('Error while fetching items data');
    })
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
    let ok = 0;
    for(let i = 0; i < this.usersList.length; i++){

      if(this.email === this.usersList[i].email && this.usersList[i].role === 'admin'){
        ok = 1;
        this.auth.setLoggedInAsAdmin(true);
        this.auth.login(this.email, this.password);
        this.email='';
        this.password='';
        break;
      }
    }
    if(ok == 0){
      alert("Access denied!");
    }
  }

}
