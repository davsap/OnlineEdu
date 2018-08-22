import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { SecurityModule } from './security/security.module';
import { UsersModule } from './users/users.module';
import { ContentModule } from './content/content.module';
import { InscriptionComponent } from './inscription/inscription.component';
import { IformateurComponent } from './inscription/iformateur/iformateur.component';
import { IetudiantComponent } from './inscription/ietudiant/ietudiant.component';
import { AppRoutingModule } from './app-routing.module';
import { CoursComponent } from './formation/cours/cours.component';
import { SujetComponent } from './formation/sujet/sujet.component';
import {FormationModule} from './formation/formation.module';

@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    IformateurComponent,
    IetudiantComponent,
    CoursComponent,
    SujetComponent
  ],
 imports: [
  BrowserModule, ContentModule, NavbarModule, SecurityModule, UsersModule, AppRoutingModule, FormationModule
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
