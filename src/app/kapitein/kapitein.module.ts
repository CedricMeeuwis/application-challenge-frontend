import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KapiteinService } from './kapitein.service';
import { PloegAanmakenComponent } from './ploeg-aanmaken/ploeg-aanmaken.component'
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [PloegAanmakenComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  providers: [KapiteinService]
})
export class KapiteinModule { }
