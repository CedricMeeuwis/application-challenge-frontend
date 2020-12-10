import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GebruikerService } from './gebruiker.service';
import { OverzichtWedstrijdenComponent } from './overzicht-wedstrijden/overzicht-wedstrijden.component';
import { WedstrijdBezigNietGestartComponent } from './wedstrijd-bezig-niet-gestart/wedstrijd-bezig-niet-gestart.component'


@NgModule({
  declarations: [OverzichtWedstrijdenComponent, WedstrijdBezigNietGestartComponent],
  imports: [
    CommonModule
  ],
  providers: [GebruikerService]
})
export class GebruikerModule { }
