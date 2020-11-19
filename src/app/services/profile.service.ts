import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  userDetails:any;
  constructor(private http:HttpClient) { }
 
  get(email):Observable<any>{
   let url="http://localhost:8081/ProfileDetails/Profile?userMail="+email;
    return this.http.post<any>(url,null);
      
  }
 
  
 
  Save(userDet):Observable<any>{
    let url="http://localhost:8081/ProfileDetails/Save";
    return this.http.post<any>(url,userDet);
      
  }
}
