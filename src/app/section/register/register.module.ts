import { NgModule }                         from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { RegisterComponent }                from './register/register.component';
import { RouterModule }                     from "@angular/router";
import { registerRoutes }                   from "./register.router";
import { SharedModule }                     from "../../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    RouterModule.forChild(registerRoutes),
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class RegisterModule {
}
