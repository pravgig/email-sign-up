import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailSignupFormComponent } from './component/email-signup-form/email-signup-form/email-signup-form.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SucessComponent } from './component/success/sucess/sucess.component';

@NgModule({
  declarations: [AppComponent, EmailSignupFormComponent, SucessComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
