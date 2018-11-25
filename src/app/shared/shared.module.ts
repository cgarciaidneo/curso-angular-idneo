import { CommonModule }             from '@angular/common';
import { NgModule }                 from '@angular/core';
import { ContenteditableDirective } from './input/content-editable.directive';
import { LayoutModule }             from "./layout/layout.module";

@NgModule({
  declarations: [ContenteditableDirective],
  imports: [
    CommonModule,
    LayoutModule
  ],
  exports: [
    LayoutModule,
    ContenteditableDirective
  ]
})
export class SharedModule {
}
