import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionCardComponent } from './question-card.component';
import { CheckboxModule } from '../checkbox/checkbox.module';
import { RadioButtonModule } from '../radio-button/radio-button.module';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [QuestionCardComponent],
  exports:[QuestionCardComponent],
  imports: [
    CommonModule,
    CheckboxModule,
 MaterialModule
  ]
})
export class QuestionCardModule { }
