import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KapiteinService } from './kapitein.service';
import { KapiteinDashboardComponent } from './kapitein-dashboard/kapitein-dashboard.component'
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [KapiteinDashboardComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers: [KapiteinService]
})
export class KapiteinModule { }
