import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-survey-form',
  templateUrl: './create-survey-form.component.html',
  styleUrls: ['./create-survey-form.component.css'],
})
export class CreateSurveyFormComponent implements OnInit {
  countOfQuestion: any[] = [];
  count = 0;
  constructor() {}

  ngOnInit(): void {}
  /**
   * add question block
   */
  increaseQuestionCount() {
    this.count++;
    this.countOfQuestion.push(this.count);
  }
  /**
   * remove question from optionField
   * @param i index
   */
  closeQuestion(i: number): void {
    this.countOfQuestion.splice(i, 1);
  }
}
