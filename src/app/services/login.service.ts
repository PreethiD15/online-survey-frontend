import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }
  isLogin: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private userMail;

  url = 'http://localhost:8081/UserRegistration/login';
  setUserMail(val){
    this.userMail = val;
  }
  getUserMail(){
    return this.userMail;
  }
  Save(logDet): Observable<any>{

    return this.http.post(this.url, logDet, {responseType: 'text'});

  }
}
