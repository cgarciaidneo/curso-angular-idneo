import { NgModule }          from '@angular/core';
import { CommonModule }      from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule }      from "@angular/router";
import { errorRoutes }       from "./error.router";

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(errorRoutes)
  ]
})
export class ErrorModule {
}
