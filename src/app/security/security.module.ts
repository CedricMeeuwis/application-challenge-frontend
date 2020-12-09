import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityComponent } from './security/security.component';
import { AuthenticateService } from './services/authenticate.service';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [SecurityComponent],
  providers: [AuthenticateService],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [SecurityComponent]
})
export class SecurityModule { }
