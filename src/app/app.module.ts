import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityInterceptor } from './security/security.interceptor';
import { SharedModule } from './shared/shared.module';
import { SecurityModule } from './security/security.module';

import { AdministratorModule } from './administrator/administrator.module'
import { GebruikerModule } from './gebruiker/gebruiker.module'
import { KapiteinModule } from './kapitein/kapitein.module';
import { HeaderComponent } from './header/header/header.component'


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
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: SecurityInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
