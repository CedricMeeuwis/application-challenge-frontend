import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PloegenBeherenComponent } from './administrator/ploegen-beheren/ploegen-beheren.component';
import { AppComponent } from './app.component';

import { GebruikersComponent } from './administrator/gebruikers/gebruikers.component';
import { TournooiBeheerComponent } from './administrator/tournooi-beheer/tournooi-beheer.component';
import { TafelsLijstComponent } from './administrator/tafels-lijst/tafels-lijst.component';

const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'ploegenBeheren', component: PloegenBeherenComponent},
  {path: 'admin/gebruikers', component: GebruikersComponent},
  {path: 'beheer-tournooi', component: TournooiBeheerComponent},
  {path: 'tafels-lijst', component: TafelsLijstComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
