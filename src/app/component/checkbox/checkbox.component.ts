import { Component, OnInit } from '@angular/core';
const OPTION = 'Option';
@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
})
export class CheckboxComponent implements OnInit {
  count = 0;
  option = OPTION;
  optionField: number[] = [1];

  constructor() {
    this.count++;
  }

  ngOnInit(): void {}

  /**
   * add new field
   */
  expandOption() {
    this.count++;
    this.optionField.push(this.count);
  }
  /**
   * delete field
   * @param i selected index
   */
  deleteOption(i: number) {
    const index = this.optionField.indexOf(i);
    if (index !== -1) {
      this.optionField.splice(index, 1);
    }
  }
}
