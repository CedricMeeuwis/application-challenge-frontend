import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityComponent } from './security/security.component';
import { AuthenticateService } from './services/authenticate.service';
import { SharedModule } from '../shared/shared.module';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  declarations: [SecurityComponent, SignUpComponent],
  providers: [AuthenticateService],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [SecurityComponent, SignUpComponent]
})
export class SecurityModule { }
