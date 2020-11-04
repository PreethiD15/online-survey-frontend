import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent implements OnInit {
  count = 1;
  optionField: number[] = [1];
  constructor() {}

  ngOnInit(): void {}
  /**
   * add field
   */
  expandOption() {
    this.count++;
    this.optionField.push(this.count);
  }
}
