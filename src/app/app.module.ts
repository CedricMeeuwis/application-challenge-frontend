import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';

import { SecurityInterceptor } from './security/security.interceptor';

import { AdministratorModule } from './administrator/administrator.module'
import { GebruikerModule } from './gebruiker/gebruiker.module'
import { KapiteinModule } from './kapitein/kapitein.module'
import { SharedModule } from './shared/shared.module';
import { SecurityModule } from './security/security.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule } from "@angular/forms"


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    SecurityModule,
    AdministratorModule,
    GebruikerModule,
    KapiteinModule,
    NgbModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: SecurityInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
