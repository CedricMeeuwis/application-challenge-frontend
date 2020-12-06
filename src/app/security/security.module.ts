import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityComponent } from './security/security.component';
import { AuthenticateService } from './services/authenticate.service';



@NgModule({
  declarations: [SecurityComponent],
  providers: [AuthenticateService],
  imports: [
    CommonModule
  ],
  exports: [SecurityComponent]
})
export class SecurityModule { }
