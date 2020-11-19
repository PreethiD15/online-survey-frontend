import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  HttpClient } from '@angular/common/http';
import { Survey } from '../model/survey';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private httpClient:HttpClient) { }
  /**
   * get survey form structure
   */
   getSurveyFormData(): Observable<Survey> {
     return  this.httpClient.get<Survey>('assets/question.json');

   }
   /**
    * save survey form
    * @param survey survey
    * @return observable
    */
   saveSurveyFormData(survey:Survey): Observable<any>{
    survey.userId=10;
    const headers = { 'X-Content-Type-Options': 'HTTP', 'Content-Type': 'application/json; charset=utf8' };
    return  this.httpClient.post('http://localhost:8081/survey-management-service/SurveyManagement/save',survey,{
      headers: headers,
      responseType: 'text'
    });
   }
}
