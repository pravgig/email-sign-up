import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailSignupFormComponent } from './component/email-signup-form/email-signup-form/email-signup-form.component';
import { SucessComponent } from './component/success/sucess/sucess.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', component: EmailSignupFormComponent },
  {
    path: 'success',
    canActivate: [AuthGuardService],
    component: SucessComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
