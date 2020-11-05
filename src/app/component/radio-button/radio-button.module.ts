import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonComponent } from './radio-button.component';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [RadioButtonComponent],
  exports: [RadioButtonComponent],
  imports: [
    CommonModule, MaterialModule
  ]
})
export class RadioButtonModule { }
