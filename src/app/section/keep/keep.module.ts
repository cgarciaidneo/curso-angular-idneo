import { KeepComponent } from './keep/keep.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { keepRoutes } from './keep.router';


@NgModule({
  declarations: [
    KeepComponent
  ],
  imports: [
    RouterModule.forChild(keepRoutes),
    CommonModule,
  ]
})
export class KeepModule { }
