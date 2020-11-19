import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Options } from 'src/app/model/options';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
})
export class CheckboxComponent implements OnInit {
  count = 1;
  errorMessage: string;
  optionField: number[] = [1];
  optionValue: Options[] = [];
  @Output() valueForCheckBox = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  /**
   * add new field
   */
  expandOption() {
    this.count++;
    this.optionField.push(this.count);
    this.valueForCheckBox.emit(this.optionValue);
  }
  /**
   * delete field
   * @param i selected index
   */
  deleteOption(i: number) {
    this.optionField.splice(i, 1);
    this.optionValue.splice(i, 1);
  }

  emit(value: any, i: number) {
    if (value) {
      let option: Options = {
        optionName: value,
      };
      if (i >= 0 && i < this.optionValue.length) {
        this.optionValue[i].optionName = value;
      } else {
        this.optionValue.push(option);
      }
    }
  }
}
