import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministratorService } from './administrator.service';
import { PloegenBeherenComponent } from './ploegen-beheren/ploegen-beheren.component'
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PloegenBeherenComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [AdministratorService],
  exports: [PloegenBeherenComponent]
})
export class AdministratorModule { }
