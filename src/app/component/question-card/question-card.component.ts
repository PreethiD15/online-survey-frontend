import { Component, OnInit, Input } from '@angular/core';
import { Survey } from 'src/app/model/survey';
import { Question } from 'src/app/model/question';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent implements OnInit {
  selected = -1;
@Input() question:Question;
@Input() index: number;
  constructor() { }

  ngOnInit(): void {
  }

}
