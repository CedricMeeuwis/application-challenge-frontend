import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PloegenBeherenComponent } from './administrator/ploegen-beheren/ploegen-beheren.component';
import { AppComponent } from './app.component';

import { GebruikersComponent } from './administrator/gebruikers/gebruikers.component';
import { TournooiBeheerComponent } from './administrator/tournooi-beheer/tournooi-beheer.component';
import { TafelsLijstComponent } from './administrator/tafels-lijst/tafels-lijst.component';
import { PloegDetailsComponent } from './gebruiker/ploeg-details/ploeg-details.component';
import { PloegBeheerComponent } from './kapitein/ploeg-beheer/ploeg-beheer.component';

import { SecurityComponent } from './security/security/security.component';
import { ManageTournooiComponent } from './administrator/manage-tournooi/manage-tournooi.component';
import { OverzichtWedstrijdenComponent } from './gebruiker/overzicht-wedstrijden/overzicht-wedstrijden.component';
import { CompetitieBeherenComponent } from './administrator/competitie-beheren/competitie-beheren.component';
import { BetwistingComponent } from './administrator/betwisting/betwisting.component';

import { HomeComponent } from './home/home/home.component';
import { SignUpComponent } from './security/sign-up/sign-up.component';
import { WedstrijdBezigNietGestartComponent } from './gebruiker/wedstrijd-bezig-niet-gestart/wedstrijd-bezig-niet-gestart.component';
import { AdminDashboardComponent } from './administrator/admin-dashboard/admin-dashboard.component';

import {AdminGuard} from './security/guards/admin/admin.guard';
import {KapiteinGuard} from './security/guards/kapitein/kapitein.guard';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'login', component: SecurityComponent},
  {path: 'admin/dashboard', component: AdminDashboardComponent, canActivate: [AdminGuard]},
  {path: 'admin/ploegen', component: PloegenBeherenComponent},
  {path: 'admin/gebruikers', component: GebruikersComponent},
  {path: 'admin/tournooien', component: TournooiBeheerComponent},
  {path: 'admin/tournooi/:id', component: ManageTournooiComponent },
  {path: 'admin/tafels', component: TafelsLijstComponent},
  {path: 'admin/competities', component: CompetitieBeherenComponent},
  {path: 'ploeg-details', component: PloegDetailsComponent},
  {path: 'kapitein/ploeg-beheer', component: PloegBeheerComponent},
  {path: 'statistieken', component: OverzichtWedstrijdenComponent},
  {path: 'wedstrijdenBezigNietGestart', component: WedstrijdBezigNietGestartComponent},
  {path: 'betwisting', component: BetwistingComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
