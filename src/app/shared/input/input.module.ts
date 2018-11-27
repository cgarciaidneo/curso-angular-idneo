import { CommonModule }             from '@angular/common';
import { NgModule }                 from '@angular/core';
import { ContenteditableDirective } from "./content-editable.directive";
import { InputComponent } from './material/input/input.component';

@NgModule({
  declarations: [
    ContenteditableDirective,
    InputComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ContenteditableDirective
  ]
})
export class InputModule {
}
