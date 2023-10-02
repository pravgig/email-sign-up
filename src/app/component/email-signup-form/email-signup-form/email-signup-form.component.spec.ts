import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSignupFormComponent } from './email-signup-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmailSignupService } from '../../../services/email-signup.service';

describe('EmailSignupFormComponent', () => {
  let component: EmailSignupFormComponent;
  let fixture: ComponentFixture<EmailSignupFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailSignupFormComponent],
      imports: [HttpClientModule, FormsModule, ReactiveFormsModule],
      providers: [EmailSignupService],
    });
    fixture = TestBed.createComponent(EmailSignupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have created 3 input elements', () => {
    const el = fixture.nativeElement.querySelector('#signUpForm');
    const inputElements = el.querySelectorAll('input');
    expect(inputElements.length).toEqual(3);
  });

  it('Check initial values from the form', () => {
    const dynamicFormGroup = component.signUpForm;
    const dynamicFormGroupValues = {
      firstName: '',
      lastName: '',
      emailAddress: '',
    };
    expect(dynamicFormGroup.value).toEqual(dynamicFormGroupValues);
  });

  it('check first name value before entering some value and validation', () => {
    const formElement: HTMLInputElement = fixture.nativeElement
      .querySelector('#signUpForm')
      .querySelectorAll('input')[0];
    const firstNameValue = component.signUpForm.get('firstName');
    expect(formElement.value).toEqual(firstNameValue?.value);
    expect(firstNameValue?.errors).not.toBeNull();
  });

  it('Check first name value after enterning some value ', () => {
    const firstNameEl: HTMLInputElement = fixture.nativeElement
      .querySelector('#signUpForm')
      .querySelectorAll('input')[0];

    firstNameEl.value = 'test';
    firstNameEl.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const firstNameValueFromGroup = component.signUpForm.get('firstName');
      expect(firstNameEl.value).toEqual(firstNameValueFromGroup?.value);
      expect(firstNameValueFromGroup?.errors).toBeNull();
    });
  });

  it('Check entire form is valid', () => {
    const firstNameEl: HTMLInputElement = fixture.nativeElement
      .querySelector('#signUpForm')
      .querySelectorAll('input')[0];
    const lastNameEl: HTMLInputElement = fixture.nativeElement
      .querySelector('#signUpForm')
      .querySelectorAll('input')[1];
    const emailEl: HTMLInputElement = fixture.nativeElement
      .querySelector('#signUpForm')
      .querySelectorAll('input')[2];
    firstNameEl.value = 'test';
    lastNameEl.value = 'user';
    emailEl.value = 'test@user.com';
    firstNameEl.dispatchEvent(new Event('input'));
    lastNameEl.dispatchEvent(new Event('input'));
    emailEl.dispatchEvent(new Event('input'));
    const isFormValid = component.signUpForm.valid;
    fixture.whenStable().then(() => {
      expect(isFormValid).toBeTruthy();
    });
  });
});
