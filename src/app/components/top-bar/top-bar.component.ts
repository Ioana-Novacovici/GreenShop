import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  hideBadge : boolean = true;
  constructor(private auth:AuthService, private cartService : CartService) {
  }

  getCartItems(){
    this.hideBadge = this.cartService.cartItemsNumber == 0;
    return this.cartService.cartItemsNumber;
  }

  logout(){
    this.auth.logout();
  }

  isLoggedIn(): boolean{
    return this.auth.isLoggedIn();
  }

  isLoggedInAsAdmin() : boolean{
    return this.auth.isLoggedInAsAdmin();
  }

  ngOnInit(): void {
  }

}
