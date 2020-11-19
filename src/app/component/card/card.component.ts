import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Question } from 'src/app/model/question';
import { Options } from 'src/app/model/options';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  questionType: string[] = ['Dropdown', 'CheckBox', 'Multiple Choice'];
  createQuestionCard: FormGroup = new FormGroup({
    question: new FormControl('', Validators.required),
    questionType: new FormControl('', Validators.required),
  });
  questionOption: any;
  @Output()
  closeModal: EventEmitter<string> = new EventEmitter();
  @Output() eventValue = new EventEmitter();
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
    this.questionOption = [];
  }
  /**
   * close Question block
   */
  closeQuestion(): void {
    this.closeModal.emit(this.createQuestionCard.controls['question'].value);
  }

  onSubmit(): void {
    if (!this.createQuestionCard.invalid) {
      if (this.questionOption.length > 0) {
        let questionData: Question = {
          questionText: this.createQuestionCard.controls['question'].value,
          questionType: this.createQuestionCard.controls['questionType'].value,
          options: this.questionOption,
        };

        this.eventValue.emit(questionData);
      } else {
        alert('Please add option');
      }
    } else {
      alert('Missing option value or question details');
    }
  }
  emit(event: any): void {
    this.questionOption = event;
  }
}
