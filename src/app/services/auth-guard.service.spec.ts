import { TestBed } from '@angular/core/testing';

import { AuthGuardService } from './auth-guard.service';

describe('AuthGuardService', () => {
  let service: AuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return false when the session value is set to false', () => {
    jest.spyOn(sessionStorage, 'getItem');
    const canActivate = service.canActivate();
    expect(canActivate).toBe(false);
  });
});
