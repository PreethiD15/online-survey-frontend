import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../services/survey.service';
import { Survey } from '../model/survey';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css'],
})
export class SurveyFormComponent implements OnInit {
  formData: Survey;
  constructor(private surveyService: SurveyService, private router: Router) {
    this.getFormData();
  }

  ngOnInit(): void {}
  /**
   * fetch form data
   */
  getFormData(): void {
    this.surveyService.getSurveyFormData().subscribe((resp: Survey) => {
      if (resp) {
        this.formData = resp;
      }
    });
  }
  /**
   * navigate to dashboard page
   */
  onCancel(): void {
    this.router.navigate(['/dashboard']);
  }
}
