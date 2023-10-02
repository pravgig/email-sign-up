import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessComponent } from './sucess.component';
import { Router } from '@angular/router';

describe('SucessComponent', () => {
  let component: SucessComponent;
  let fixture: ComponentFixture<SucessComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SucessComponent],
    });
    fixture = TestBed.createComponent(SucessComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have h1 as Thank You! for registering with us.', () => {
    const textEl: HTMLInputElement = fixture.nativeElement.querySelector('h1');
    expect(textEl.textContent).toContain('Thank You! for registering with us.');
  });
  it('Should check button click event', () => {
    const btnEl = fixture.debugElement.query(By.css('[routerLink=""]'));
    btnEl.triggerEventHandler('click', null);
    fixture.detectChanges();
    const currentUrl = router.url;
    expect(currentUrl).toBe('/');
  });
});
