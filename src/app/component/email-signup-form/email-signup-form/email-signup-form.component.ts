import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailSignupService } from '../../../services/email-signup.service';
import {
  EmailRegistrationFormSet,
  FormValidator,
} from '../../../models/registration-form';

@Component({
  selector: 'app-email-signup-form',
  templateUrl: './email-signup-form.component.html',
  styleUrls: ['./email-signup-form.component.scss'],
})
export class EmailSignupFormComponent {
  constructor(
    private emailsignupservice: EmailSignupService,
    private router: Router
  ) {}

  signUpForm: FormGroup = new FormGroup({});
  emailRegistarForm: EmailRegistrationFormSet;

  public registerUser(form: FormGroup) {
    if (!form.invalid && form.value.emailAddress !== '') {
      this.emailsignupservice.registerUser(form.value).subscribe({
        next: () => {
          sessionStorage.setItem('isRegistered', 'true');
          this.router.navigate(['/success']);
        },
        error: (e) => {
          alert('You are not registered, please try after sometime');
        },
      });
    } else alert('please enter required fields');
  }

  private buildEmailRegistrationForm() {
    this.emailsignupservice.getEmailRegistrationForm().subscribe((form) => {
      this.emailRegistarForm = form;
    });

    let formGroup: { [key: string]: unknown } = {};

    if (this.emailRegistarForm.formType === 'emailRegistration') {
      this.emailRegistarForm.formControls.forEach((control) => {
        let controlValidators: any[] = [];
        if (control.validation) {
          control.validation.forEach((validation: FormValidator) => {
            if (validation.validator === 'required')
              controlValidators.push(Validators.required);
            if (validation.validator === 'email')
              controlValidators.push(Validators.email);
          });
        }

        formGroup[control.formControlName] = ['', controlValidators];
        this.signUpForm.addControl(
          control.formControlName,
          new FormControl('', controlValidators)
        );
      });
    }
  }

  ngOnInit(): void {
    sessionStorage.setItem('isRegistered', 'false');
    this.buildEmailRegistrationForm();
  }
}
