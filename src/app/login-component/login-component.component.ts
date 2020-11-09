import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor(private loginser: LoginService, private router: Router) { }
  userLoginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    userPassword: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)])
  });

  ngOnInit(): void {
  }
  onSubmit(){

   this.loginser.Save(this.userLoginForm.value).subscribe(
      response =>  {
        if (response === 'Successfully Logged In'){
          this.loginser.setUserMail(this.userLoginForm.value.email);
          this.loginser.isLogin.next(true);
          this.router.navigate(['/dashboard']);
        }

      },

      error => {
        this.loginser.isLogin.next(false);
        console.log(error);
      }
    );
   }
}
