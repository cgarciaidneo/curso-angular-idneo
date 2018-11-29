import { Component }                     from '@angular/core';
import { FormGroup, Validators }         from "@angular/forms";
import { buildFormGroup, Field, IField } from "../../../core/util/forms/forms";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
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

  register() {
    console.log(this.fields);
    // this.registerForm.valid
    console.log(this.form.getRawValue())
  }
}
