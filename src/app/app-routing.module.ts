import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PloegenBeherenComponent } from './administrator/ploegen-beheren/ploegen-beheren.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'ploegenBeheren', component: PloegenBeherenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
