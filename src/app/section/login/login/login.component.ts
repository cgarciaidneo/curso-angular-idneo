import { Component, OnInit }             from '@angular/core';
import { buildFormGroup, Field, IField } from "../../../core/util/forms/forms";
import { FormGroup, Validators }         from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  fields: IField[] = [
    new Field({
      label: 'Email',
      name: 'email',
      validators: [Validators.required, Validators.email]
    }),
    new Field({
      label: 'Password',
      name: 'password',
      type: 'password',
      validators: [Validators.required]
    })
  ];

  form: FormGroup = buildFormGroup(this.fields);

  constructor() { }

  ngOnInit() {
  }

  login(){
    console.log('TO-DO');
  }

}
