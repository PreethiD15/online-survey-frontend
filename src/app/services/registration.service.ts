import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  isRegister: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(private http: HttpClient) { }
  url = 'http://localhost:8081/UserRegistration/Save';


  Save(userDet): Observable<any>{

    return this.http.post<any>(this.url, userDet);

  }
}
