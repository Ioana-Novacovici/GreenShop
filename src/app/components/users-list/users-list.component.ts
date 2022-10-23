import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  usersList: User[] = [];

  getAllUsers(){

    this.userService.getAllUsers().subscribe(res => {

      this.usersList = res.map((e : any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })

    }, () => {
      alert('Error while fetching items data');
    })

  }

  deleteUser(user: User){
    if(window.confirm('Are you sure you want to delete user: ' + user.email + '?')){
      this.userService.deleteUser(user);
    }
  }


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

}
