import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UrOgvComponent } from './ur-ogv/ur-ogv.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UrOgvComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
