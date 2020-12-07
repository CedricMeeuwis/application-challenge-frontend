import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TournooiBeheerComponent } from './administrator/tournooi-beheer/tournooi-beheer.component';


const routes: Routes = [
  {path: 'beheer-tournooi', component: TournooiBeheerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
