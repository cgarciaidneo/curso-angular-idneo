import { Component }                     from '@angular/core';
import { FormGroup, Validators }         from "@angular/forms";
import { buildFormGroup, Field, IField } from "../../../core/util/forms/forms";
import { RegisterService }               from "../../../core/service/register.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {

  fields: IField[] = [
    new Field({
      label: 'Name',
      name: 'name',
      validators: [Validators.required]
    }),
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

  success: boolean = false;

  constructor(private registerService: RegisterService) {}


  register() {
    this.success = true;
    this.registerService.register(this.form.getRawValue());
  }
}
