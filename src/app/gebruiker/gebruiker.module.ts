import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GebruikerService } from './gebruiker.service';
import { OverzichtWedstrijdenComponent } from './overzicht-wedstrijden/overzicht-wedstrijden.component'


@NgModule({
  declarations: [OverzichtWedstrijdenComponent],
  imports: [
    CommonModule
  ],
  providers: [GebruikerService]
})
export class GebruikerModule { }
