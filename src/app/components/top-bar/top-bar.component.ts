import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private auth:AuthService) {

  }

  logout(){
    this.auth.logout();
  }

  isLoggedIn(): boolean{
    return this.auth.isLoggdeIn();
  }

  ngOnInit(): void {
  }

}
