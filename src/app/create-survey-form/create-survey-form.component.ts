import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Question } from '../model/question';
import { Survey } from '../model/survey';
import { SurveyService } from '../services/survey.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-create-survey-form',
  templateUrl: './create-survey-form.component.html',
  styleUrls: ['./create-survey-form.component.css'],
})
export class CreateSurveyFormComponent implements OnInit {
  selected = -1;
  selectedType: string;
  optionForSurvey = ['Date', 'Number'];
  surveyForm: Survey;
  minDate = new Date();
  fetchValue: boolean = false;
  countOfQuestion: any[] = [];
  count = 0;
  cardQuestion: Question[] = [];
  createSurveyForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    surveyType: new FormControl('', Validators.required),
    startDate: new FormControl(new Date(), Validators.required),
    endDate: new FormControl(''),
    numberOfResponse: new FormControl(0, [Validators.required]),
  });
  constructor(private router: Router, private surveyService: SurveyService) {}

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
  closeQuestion(i: number, questionValue: string): void {
    let filterIndex = this.cardQuestion.findIndex(
      (question) => question.questionText === questionValue
    );
    if (filterIndex !== -1) {
      this.cardQuestion.splice(filterIndex, 1);
    }
    this.countOfQuestion.splice(i, 1);
  }
  /**
   * return to dashboard
   */
  backToDashBoard(): void {
    this.router.navigate(['/admin-dashboard']);
  }
  /**
   * store question in array
   * @param event question
   */
  cardValue(event: Question) {
    if (this.cardQuestion.length > 0) {
      let filterIndex = this.cardQuestion.findIndex(
        (question) => question.questionText === event.questionText
      );
      if (filterIndex !== -1) {
        alert('Question updated');
        this.cardQuestion[filterIndex] = event;
      } else {
        alert('Question added');
        this.cardQuestion.push(event);
      }
    } else {
      this.cardQuestion.push(event);
      alert('Question added');
    }
  }
  /**
   * save survey form
   */
  onSubmit(): void {
    if (!this.createSurveyForm.invalid) {
      if (this.cardQuestion.length > 0) {
       let survey: Survey = {
          questionList: this.cardQuestion,
          isOpen: true,
          userId:10,
          surveyDescription: this.createSurveyForm.controls['description']
            .value,
          surveyTitle: this.createSurveyForm.controls['title'].value,
          surveyType: this.createSurveyForm.controls['surveyType'].value,
          numberOfPeopleResponse: this.createSurveyForm.controls[
            'numberOfResponse'
          ].value,
          startDate: this.createSurveyForm.controls['startDate'].value,
          endDate: this.createSurveyForm.controls['endDate'].value,
        };
        this.surveyForm=survey;
        this.surveyForm.surveyType = this.surveyForm.surveyType.toUpperCase();
        this.surveyService
          .saveSurveyFormData(this.surveyForm)
          .subscribe((response) => {
            alert('Survey form created successfully');
            this.router.navigate(['/admin-dashboard']);
          });
      } else {
        alert('Please add at least one question');
      }
    } else {
      alert('Invalid survey data');
    }
  }
  /**
   * set validators on basis of selected type value
   */
  setValidations(): void {
    if (this.selectedType === 'Date') {
      this.createSurveyForm.controls['numberOfResponse'].reset();
      this.createSurveyForm.controls['numberOfResponse'].setValue(0);
      this.createSurveyForm.controls['endDate'].setValidators(
        Validators.required
      );
    } else {
      this.createSurveyForm.controls['endDate'].reset();
      this.createSurveyForm.controls['numberOfResponse'].setValidators(
        Validators.required
      );
    }
  }
}
