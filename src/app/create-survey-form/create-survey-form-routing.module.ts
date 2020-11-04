import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { CreateSurveyFormComponent } from './create-survey-form.component';
import { MaterialModule } from '../material.module';


const routes: Routes = [  { path: '', component: CreateSurveyFormComponent },


];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CreateSurveyFormRoutingModule { }
