import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    MatIconModule,
  ],
  exports: [
    FormsModule,
    HttpClientModule,
    NgbModule,
    MatIconModule,
  ]
})
export class SharedModule { }
