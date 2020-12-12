import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityInterceptor } from './security/security.interceptor';

import { AdministratorModule } from './administrator/administrator.module'
import { GebruikerModule } from './gebruiker/gebruiker.module'
import { KapiteinModule } from './kapitein/kapitein.module'
import { SharedModule } from './shared/shared.module';
import { SecurityModule } from './security/security.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule } from "@angular/forms"
import { HeaderComponent } from './header/header/header.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { SignUpComponent } from './security/sign-up/sign-up.component';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    SecurityModule,
    AdministratorModule,
    GebruikerModule,
    KapiteinModule,
    NgbModule,
    FormsModule,
    NoopAnimationsModule,
    HomeModule

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: SecurityInterceptor,
    multi: true,
    },
    {provide: MAT_DATE_LOCALE, useValue: 'nl-BE'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
