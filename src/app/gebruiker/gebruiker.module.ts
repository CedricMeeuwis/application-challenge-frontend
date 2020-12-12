import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GebruikerService } from './gebruiker.service';
import { PloegDetailsComponent } from './ploeg-details/ploeg-details.component';
import { OverzichtWedstrijdenComponent } from './overzicht-wedstrijden/overzicht-wedstrijden.component';
import { WedstrijdBezigNietGestartComponent } from './wedstrijd-bezig-niet-gestart/wedstrijd-bezig-niet-gestart.component'
import { SharedModule } from '../shared/shared.module';
import { GebruikerDashboardComponent } from './gebruiker-dashboard/gebruiker-dashboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [OverzichtWedstrijdenComponent, WedstrijdBezigNietGestartComponent,PloegDetailsComponent, GebruikerDashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  providers: [GebruikerService]
})
export class GebruikerModule { }
