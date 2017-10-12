import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { UrOgvComponent } from './ur-ogv/ur-ogv.component';
import { UrOgeComponent } from './ur-oge/ur-oge.component';
import { UrOgtComponent } from './ur-ogt/ur-ogt.component';
import { OgxCoperacionesComponent } from './ogx-coperaciones/ogx-coperaciones.component';
import { OdComponent } from './od/od.component';
import { appRouterProviders, routing } from './app.routing';
import { OgxEstandaresComponent } from './ogx-estandares/ogx-estandares.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UrOgvComponent,
    UrOgeComponent,
    UrOgtComponent,
    OgxCoperacionesComponent,
    OdComponent,
    OgxEstandaresComponent,

  ],
  imports: [
    BrowserModule,
     routing,
      HttpModule,
      FormsModule
  ],
  providers: [appRouterProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
