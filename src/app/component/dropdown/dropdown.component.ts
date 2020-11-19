import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Options } from 'src/app/model/options';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent implements OnInit {
  count = 1;
  optionField: number[] = [1];
  optionValue: Options[] = [];
  @Output() valueForDropdown = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  /**
   * add field
   */
  expandOption() {
    this.count++;
    this.optionField.push(this.count);
    this.valueForDropdown.emit(this.optionValue);
  }
  /**
   * store option value in array
   * @param value option value
   */
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

  /**
   * delete field
   * @param i selected index
   */
  deleteOption(i: number) {
    this.optionField.splice(i, 1);
    this.optionValue.splice(i, 1);
  }
}
