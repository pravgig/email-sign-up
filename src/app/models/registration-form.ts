import { FormControl } from '@angular/forms';

export interface RegisterUser {
  emailAddress: FormControl<string | null>;
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
}

export interface UserForm {
  emailAddress: string;
  firstName: string;
  lastName: string;
}

export interface EmailRegistrationFormSet {
  formType: string;
  formControls: EmailRegistrationFormControl[];
}

export interface EmailRegistrationFormControl {
  labelName: string;
  type: string;
  formControlName: string;
  validation?: FormValidator[];
}

export interface FormValidator {
  validator: string;
  validatorName: string;
  message: string;
}
