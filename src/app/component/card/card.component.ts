import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  questionType: string[] = ['Dropdown', 'CheckBox'];
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

  deleteQuestion() {}
}
