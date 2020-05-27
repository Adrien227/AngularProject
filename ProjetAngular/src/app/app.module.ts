import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Déclare des composants pour la gestion des formulaires : https://angular.io/api/forms/FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
