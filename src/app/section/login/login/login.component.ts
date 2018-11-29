import { Component, OnInit }             from '@angular/core';
import { buildFormGroup, Field, IField } from "../../../core/util/forms/forms";
import { FormGroup, Validators }         from "@angular/forms";
import { AuthService }                   from "../../../core/service/storage/auth.service";
import { Router }                        from "@angular/router";

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

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  login(){
    const rawForm = this.form.getRawValue();
    this.auth.login(rawForm['email'], rawForm['password'])
      .subscribe(success => {
        this.router.navigate(['/']);
      }, err => {
        alert('Error!');
      });
  }

}
