import { EmailRegistrationFormSet } from './app/models/registration-form';

export const FORM_SET: EmailRegistrationFormSet = {
  formType: 'emailRegistration',
  formControls: [
    {
      formControlName: 'firstName',
      labelName: 'First name',
      type: 'text',
      validation: [
        {
          validatorName: 'required',
          validator: 'required',
          message: 'The field is required',
        },
        {
          validatorName: 'minimum length',
          validator: 'minlength',
          message: 'The field should have minimum length',
        },
      ],
    },
    {
      formControlName: 'lastName',
      labelName: 'Second name',
      type: 'text',
    },
    {
      formControlName: 'emailAddress',
      labelName: 'E-mail',
      type: 'text',
      validation: [
        {
          validatorName: 'email',
          validator: 'email',
          message: 'Please enter valid email',
        },
      ],
    },
  ],
};
