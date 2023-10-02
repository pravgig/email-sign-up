import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { EmailSignupService } from './email-signup.service';
import { HttpClient } from '@angular/common/http';
import { UserForm } from '../models/registration-form';

describe('EmailSignupService', () => {
  let service: EmailSignupService;

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  const mockForm: UserForm = {
    firstName: 'test',
    lastName: 'user',
    emailAddress: 'test@user.com',
  };

  const mockRes = {
    res: 'Successfully registered',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [],
    });
    service = TestBed.inject(EmailSignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should make a post call', () => {
    service
      .registerUser(mockForm)
      .subscribe((res) => expect(res).toEqual(mockRes));
  });
});
