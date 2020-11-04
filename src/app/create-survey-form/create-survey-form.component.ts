import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-create-survey-form',
  templateUrl: './create-survey-form.component.html',
  styleUrls: ['./create-survey-form.component.css'],

})
export class CreateSurveyFormComponent implements OnInit {
  questionType: string[] = ['Dropdown', 'CheckBox'];
  countOfQuestion: any[] = [];

  constructor() { }
addQuestion = false;
  ngOnInit(): void {
  }
increaseQuestionCount(){
 this.addQuestion = true;
 this.countOfQuestion.push('1');
}
deleteQuestion(){

}

}
