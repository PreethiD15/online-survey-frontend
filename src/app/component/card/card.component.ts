import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  questionType: string[] = ['Dropdown', 'CheckBox', 'Multiple Choice'];
  @Output()
  closeModal: EventEmitter<boolean> = new EventEmitter();
  countOfQuestion: any[] = [];
  selectedOption: string;
  constructor() {}

  ngOnInit(): void {}
  /**
   * assign select option
   * @param selectedOption selected value
   */
  assignSelectedOption(selectedOption: string): void {
    this.selectedOption = selectedOption;
  }
  /**
   * close Question block
   */
  closeQuestion(): void {
    this.closeModal.emit(true);
  }
}
