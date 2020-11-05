import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MaterialModule } from 'src/app/material.module';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CheckboxModule } from '../checkbox/checkbox.module';
import { DropdownModule } from '../dropdown/dropdown.module';
import { RadioButtonModule } from '../radio-button/radio-button.module';

@NgModule({
  declarations: [CardComponent],
  exports: [CardComponent],
  imports: [CommonModule, MaterialModule, CheckboxModule, DropdownModule, RadioButtonModule],
})
export class CardModule {}
