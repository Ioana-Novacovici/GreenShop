import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {StoreComponent} from "./components/store/store.component";
import {AdminLoginComponent} from "./components/admin-login/admin-login.component";
import {ShopViewComponent} from "./components/shop-view/shop-view.component";
import {UsersListComponent} from "./components/users-list/users-list.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'store', component: StoreComponent},
  {path: 'adminLog', component: AdminLoginComponent},
  {path: 'shopView', component: ShopViewComponent},
  {path: 'usersView', component: UsersListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
