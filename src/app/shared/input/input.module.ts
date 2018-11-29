import { CommonModule }                     from '@angular/common';
import { NgModule }                         from '@angular/core';
import { ContenteditableDirective }         from "./content-editable.directive";
import { InputComponent }                   from './material/input/input.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    ContenteditableDirective,
    InputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ContenteditableDirective,
    InputComponent
  ]
})
export class InputModule {
}
