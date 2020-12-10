import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GebruikerService } from './gebruiker.service';
import { PloegDetailsComponent } from './ploeg-details/ploeg-details.component'
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [PloegDetailsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [GebruikerService]
})
export class GebruikerModule { }
