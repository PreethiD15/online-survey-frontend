import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSurveyFormComponent } from './create-survey-form.component';
import { MaterialModule } from '../material.module';
import { CreateSurveyFormRoutingModule } from './create-survey-form-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CheckboxModule } from '../component/checkbox/checkbox.module';
import { CardModule } from '../component/card/card.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateSurveyFormComponent],
  imports: [
    CommonModule,
    CardModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CreateSurveyFormRoutingModule,
  ],
  exports: [CreateSurveyFormComponent],
})
export class CreateSurveyFormModule {}
