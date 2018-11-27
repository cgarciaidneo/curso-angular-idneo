import { NgModule }          from '@angular/core';
import { CommonModule }      from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { RouterModule }      from "@angular/router";
import { registerRoutes }    from "./register.router";

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    RouterModule.forChild(registerRoutes),
    CommonModule
  ]
})
export class RegisterModule {
}
