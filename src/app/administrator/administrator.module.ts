import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministratorService } from './administrator.service';
import { TafelsLijstComponent } from './tafels-lijst/tafels-lijst.component'
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [TafelsLijstComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [AdministratorService]
})
export class AdministratorModule { }
