import { CommonModule }  from '@angular/common';
import { NgModule }      from '@angular/core';
import { LayoutModule }  from "./layout/layout.module";
import { InputModule }   from "./input/input.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule
  ],
  exports: [
    LayoutModule,
    InputModule
  ]
})
export class SharedModule {

}
