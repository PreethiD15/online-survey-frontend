import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
})
export class CheckboxComponent implements OnInit {
  count = 1;
  optionField: number[] = [1];

  constructor() {

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
      this.optionField.splice(i, 1);
  }
}
