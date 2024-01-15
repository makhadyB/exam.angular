// Import des modules Angular nécessaires
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Import du composant principal de l'application
import { AppComponent } from './app.component';

@NgModule({
  // Déclaration des composants, directives, pipes
  declarations: [
    AppComponent
  ],

  // Import des modules Angular nécessaires à l'application
  imports: [
    BrowserModule,
    FormsModule,
HttpClientModule,
ReactiveFormsModule
  ],

  // Déclaration des services à injecter dans l'application
  providers: [],

  // Composant principal de l'application
  bootstrap: [AppComponent]
})
export class AppModule { }
