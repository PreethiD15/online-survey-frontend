import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Options } from 'src/app/model/options';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css'],
})
export class RadioButtonComponent implements OnInit {
  count = 1;
  optionField: number[] = [1];
  optionValue: Options[] = [];
  @Output() valueForRadio = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  /**
   * add new field
   */
  expandOption(): void {
    this.count++;
    this.optionField.push(this.count);
    this.valueForRadio.emit(this.optionValue);
  }
  /**
   * delete field
   * @param i selected index
   */
  deleteOption(i: number): void {
    this.optionField.splice(i, 1);
    this.optionValue.splice(i, 1);
  }
  /**
   * store option value in array
   * @param value option value
   */
  emit(value: any, i: number): void {
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
