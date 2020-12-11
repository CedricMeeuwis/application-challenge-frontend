import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministratorService } from './administrator.service';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { GebruikersComponent } from './gebruikers/gebruikers.component'
import { TafelsLijstComponent } from './tafels-lijst/tafels-lijst.component'
import { TournooiBeheerComponent } from './tournooi-beheer/tournooi-beheer.component';
import { PloegenBeherenComponent } from './ploegen-beheren/ploegen-beheren.component';
import { SharedModule } from '../shared/shared.module';
import { ManageTournooiComponent } from './manage-tournooi/manage-tournooi.component';
import { CompetitieBeherenComponent } from './competitie-beheren/competitie-beheren.component';
import { BetwistingComponent } from './betwisting/betwisting.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [GebruikersComponent,
                TournooiBeheerComponent,
                TafelsLijstComponent,
                PloegenBeherenComponent,
                ManageTournooiComponent,
                CompetitieBeherenComponent,
                BetwistingComponent,
                AdminDashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,

  ],
  providers: [AdministratorService],
  exports: [PloegenBeherenComponent]
})
export class AdministratorModule { }
