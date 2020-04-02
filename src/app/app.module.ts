import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormInscripComponent } from './form-inscrip/form-inscrip.component';
import { FormHomeComponent } from './form-home/form-home.component';
import { FormRechercheComponent } from './form-recherche/form-recherche.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FormInscripComponent,
    FormHomeComponent,
    FormRechercheComponent,
    FormLoginComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
