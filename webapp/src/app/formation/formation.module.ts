import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuillModule, QuillEditorComponent } from 'ngx-quill';
import { CoursformComponent } from './coursform/coursform.component';

@NgModule({
  imports: [
    CommonModule, QuillModule
  ],
  declarations: [CoursformComponent]
})
export class FormationModule { }
