import { Component, Input, OnInit } from '@angular/core';
import { FormGroup }                from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() label : string = '';

  @Input() name: string;

  @Input() formGroup: FormGroup;

  @Input() type: 'text' | 'number' | 'password' = "text";

  constructor() { }

  ngOnInit() {
  }

  hasError():  boolean{
    return this.formGroup && this.formGroup.get(this.name).errors && this.formGroup.get(this.name).touched;
  }

  getOneError(): string {
    if(this.formGroup && this.formGroup.errors && this.formGroup.errors.length){
      return this.formGroup.errors[0];
    }
    return '';
  }

}
