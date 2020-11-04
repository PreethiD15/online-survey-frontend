import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { MaterialModule } from './material.module';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';


const routes: Routes = [];

@NgModule({
  imports: [ BrowserModule,
    BrowserAnimationsModule,
   MaterialModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: 'register', component: RegistrationComponentComponent },
      { path: 'login', component: LoginComponentComponent },
       ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
