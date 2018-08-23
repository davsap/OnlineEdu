import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { HomeComponent } from './home/home.component';
import { FormationComponent } from './formation/formation.component';
import { AboutComponent } from './about/about.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CoursComponent } from './cours/cours.component';
import { CoursFormComponent } from './cours/coursform/coursform.component';
import {SujetComponent} from './sujet/sujet.component';

@NgModule({
  imports: [
CommonModule, ReactiveFormsModule
  ],
  declarations: [ContentComponent, HomeComponent, FormationComponent, AboutComponent, CoursComponent, CoursFormComponent, SujetComponent],
  exports : [ContentComponent, HomeComponent, FormationComponent, AboutComponent, CoursComponent, CoursFormComponent, SujetComponent]
})
export class ContentModule { }
