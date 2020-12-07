import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministratorService } from './administrator.service';
import { GebruikersComponent } from './gebruikers/gebruikers.component'
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TournooiBeheerComponent } from './tournooi-beheer/tournooi-beheer.component';

@NgModule({
  declarations: [GebruikersComponent,
                TournooiBeheerComponent,
                ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
  ],
  providers: [AdministratorService]
})
export class AdministratorModule { }
