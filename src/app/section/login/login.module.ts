import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule }   from "@angular/router";
import { loginRoutes }    from "./login.router";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    RouterModule.forChild(loginRoutes),
    CommonModule
  ]
})
export class LoginModule { }
