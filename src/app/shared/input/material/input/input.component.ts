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

  getOneError(): any {
    if(this.hasError()){
      const keys = Object.keys(this.formGroup.get(this.name).errors);
      return keys[0];
    }
    return '';
  }

}
