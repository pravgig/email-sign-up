import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailSignupFormComponent } from './component/email-signup-form/email-signup-form/email-signup-form.component';

const routes: Routes = [{ path: '', component: EmailSignupFormComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
