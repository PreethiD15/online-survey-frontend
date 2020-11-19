import { Injectable } from '@angular/core';
import { HttpClient,HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersurveyresponseService {

  constructor(private http:HttpClient) { }
 
  getUserdashboardSurvey(userId):Observable<any>{
    alert(userId);
   var url="http://localhost:8081/survey-management-service/SurveyUserResponse/submittedSurvey?userId="+userId;
    return this.http.post<any>(url,null);
  }
}
