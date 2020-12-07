import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministratorService } from './administrator.service';
import { GebruikersComponent } from './gebruikers/gebruikers.component'
import { TafelsLijstComponent } from './tafels-lijst/tafels-lijst.component'
import { TournooiBeheerComponent } from './tournooi-beheer/tournooi-beheer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [GebruikersComponent,
                TournooiBeheerComponent,
                TafelsLijstComponent],
  imports: [
    CommonModule,
    SharedModule,

  ],
  providers: [AdministratorService]
})
export class AdministratorModule { }
