import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  EmailRegistrationFormSet,
  UserForm,
} from '../../app/models/registration-form';
import { Observable } from 'rxjs/internal/Observable';
import { FORM_SET } from 'src/form.json';
import { of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class EmailSignupService {
  constructor(private httpClient: HttpClient) {}

  private uri = 'http://127.0.0.1:3000/registerUser';

  public registerUser(form: UserForm) {
    return this.httpClient.post(this.uri, form, httpOptions);
  }

  public getEmailRegistrationForm(): Observable<EmailRegistrationFormSet> {
    const registrationForm = of(FORM_SET);
    return registrationForm;
  }
}
