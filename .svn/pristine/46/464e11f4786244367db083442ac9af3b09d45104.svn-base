import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  optionField: number[] = [1];
  @Input() placeholder: string;
  @Input() name: string;
  @Input() index: number;

  optionValue: string;
  @Output() inputValueChange: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  /**
   * emit input value
   */
  returnInput(): void {
    this.inputValueChange.emit(this.optionValue);
  }
}
