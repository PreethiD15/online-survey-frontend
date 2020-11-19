import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegistrationService } from '../services/registration.service';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { ProfileService } from '../services/profile.service';
@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.css'],
})
export class RegistrationComponentComponent implements OnInit {
  constructor(
    private registerSer: RegistrationService,
    private profileser:ProfileService,
    private loginSer:LoginService,
    private router: Router
  ) {}
  userRegForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(30),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(30),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
   
    phone: new FormControl(''),
   
    
    userPassword: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
  });

  ngOnInit(): void {}
  onSubmit() {
    
    this.registerSer.Save(this.userRegForm.value).subscribe(
      (response) => {
        if (response) {
          alert("Successfully Registered !!!")
          this.registerSer.isRegister.next(true);
          this.loginSer.setUserMail(this.userRegForm.value.email);
          this.setProfileDetails();
          
        } else {
          alert(response)
          this.registerSer.isRegister.next(false);
        }
      },

      (error) => {
        this.registerSer.isRegister.next(false);
      }
    );
  }

  setProfileDetails(){
    this.profileser.get(this.userRegForm.value.email).subscribe(
      response=>{
        this.profileser.userDetails=response;
        this.router.navigate(['/dashboard']);
      },
      error=>{
        console.log(error);
      }
    );
  }
}
