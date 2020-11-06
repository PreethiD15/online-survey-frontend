import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { RegistrationService } from './services/registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private loginService: LoginService, private registerService: RegistrationService){
    this.loginService.isLogin.subscribe((response => {
      if (response){
        this.login = 'LOG OUT';
        this.sign = '';
        this.loginLink = '';
      }
    }));
    this.registerService.isRegister.subscribe((response => {
      if (response){
        this.login = 'LOG OUT';
        this.sign = '';
        this.loginLink = '';
      }
    }));
  }
  login = 'LOGIN';
  sign = 'SIGN UP';
  loginLink = '/login';

  title = 'online-survey-system';
  callLogin(): void {
    if (this.login === 'LOG OUT'){
      this.sign = 'SIGN UP';
      this.login = 'LOG IN';
      this.loginLink = '/login';
    }
  }
}
