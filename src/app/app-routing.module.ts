import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PloegenBeherenComponent } from './administrator/ploegen-beheren/ploegen-beheren.component';
import { AppComponent } from './app.component';

import { GebruikersComponent } from './administrator/gebruikers/gebruikers.component';
import { TournooiBeheerComponent } from './administrator/tournooi-beheer/tournooi-beheer.component';
import { TafelsLijstComponent } from './administrator/tafels-lijst/tafels-lijst.component';
import { SecurityComponent } from './security/security/security.component';
import { ManageTournooiComponent } from './administrator/manage-tournooi/manage-tournooi.component';
import { OverzichtWedstrijdenComponent } from './gebruiker/overzicht-wedstrijden/overzicht-wedstrijden.component';
import { HomeComponent } from './home/home/home.component';
import { SignUpComponent } from './security/sign-up/sign-up.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'ploegenBeheren', component: PloegenBeherenComponent},
  {path: 'admin/gebruikers', component: GebruikersComponent},
  {path: 'beheer-tournooi', component: TournooiBeheerComponent},
  {path: 'tafels-lijst', component: TafelsLijstComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'manage-tournooi/:id', component: ManageTournooiComponent },
  {path: 'login', component: SecurityComponent},
  {path: 'wedstrijden', component: OverzichtWedstrijdenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
