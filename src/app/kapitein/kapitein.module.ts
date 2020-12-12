import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KapiteinService } from './kapitein.service';
import { PloegBeheerComponent } from './ploeg-beheer/ploeg-beheer.component'
import { SharedModule } from '../shared/shared.module';
import { KapiteinDashboardComponent } from './kapitein-dashboard/kapitein-dashboard.component'
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [KapiteinDashboardComponent, PloegBeheerComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  providers: [KapiteinService]
})
export class KapiteinModule { }
