import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KapiteinService } from './kapitein.service';
import { PloegBeheerComponent } from './ploeg-beheer/ploeg-beheer.component'
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [PloegBeheerComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [KapiteinService]
})
export class KapiteinModule { }
