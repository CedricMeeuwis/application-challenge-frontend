import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TafelsLijstComponent } from './administrator/tafels-lijst/tafels-lijst.component';


const routes: Routes = [
  { path: 'tafels-lijst', component: TafelsLijstComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
