import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { MaterialModule } from './material.module';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { AuthenticationService } from './services/authentication.service';


const routes: Routes = [
{ path: 'register', component: RegistrationComponentComponent },
{ path: 'create-survey-form', loadChildren: () => import('./create-survey-form/create-survey-form.module').then(m => m.CreateSurveyFormModule),canActivate:[AuthenticationService] },

{
  path:'dashboard',loadChildren:()=> import ('./user-dashboard/user-dashboard.module').
  then(m=>m.UserDashboardModule),canActivate:[AuthenticationService] 
},
{
  path:'admin-dashboard',loadChildren:()=> import ('./admin-dashboard/admin-dashboard.module').then(m=>m.AdminDashboardModule),canActivate:[AuthenticationService] 
},
{
  path:'survey-form',loadChildren:()=> import ('./survey-form/survey-form.module').then(m=>m.SurveyFormModule),canActivate:[AuthenticationService] 
},
//{ path: '**', loadChildren: () => import('./first-page/first-page.module').then(m => m.FirstPageModule)  },
{ path: '**', component: LoginComponentComponent },
];

@NgModule({
  imports: [ BrowserModule,
    BrowserAnimationsModule,
   MaterialModule,
    RouterModule.forRoot(
     routes
       )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
