import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AdministratorService } from './administrator.service';
import { TournooiBeheerComponent } from './tournooi-beheer/tournooi-beheer.component';



@NgModule({
  declarations: [TournooiBeheerComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  providers: [AdministratorService]
})
export class AdministratorModule { }
