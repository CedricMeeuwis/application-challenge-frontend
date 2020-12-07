import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GebruikersComponent } from './administrator/gebruikers/gebruikers.component';


const routes: Routes = [
  {path: 'admin/gebruikers', component: GebruikersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
