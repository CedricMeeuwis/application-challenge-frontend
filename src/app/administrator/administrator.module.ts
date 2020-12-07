import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministratorService } from './administrator.service';
import { GebruikersComponent } from './gebruikers/gebruikers.component'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [GebruikersComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [AdministratorService]
})
export class AdministratorModule { }
