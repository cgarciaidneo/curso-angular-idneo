import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DrawerLayoutModule} from "./drawer-layout/drawer-layout.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DrawerLayoutModule,
  ],
  exports: [
    DrawerLayoutModule
  ]
})
export class LayoutModule { }
