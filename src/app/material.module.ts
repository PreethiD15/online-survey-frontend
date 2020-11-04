import { NgModule } from  '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {  MatToolbarModule} from '@angular/material/toolbar';
import {  MatCardModule} from '@angular/material/card';
import {  MatFormFieldModule} from '@angular/material/form-field';
import {  MatDatepickerModule} from '@angular/material/datepicker';
import {  MatRadioModule} from '@angular/material/radio';

 
@NgModule({
imports: [MatButtonModule,MatToolbarModule,MatCardModule, MatFormFieldModule, MatRadioModule,MatDatepickerModule],
exports: [MatButtonModule,MatToolbarModule,MatCardModule, MatFormFieldModule, MatRadioModule,MatDatepickerModule],
 
})
 
export  class MaterialModule { }
