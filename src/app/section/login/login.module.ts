import { NgModule }                         from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { LoginComponent }                   from './login/login.component';
import { RouterModule }                     from "@angular/router";
import { loginRoutes }                      from "./login.router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule }                     from "../../shared/shared.module";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    RouterModule.forChild(loginRoutes),
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
