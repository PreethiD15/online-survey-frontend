import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { MaterialModule } from './material.module';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';


const routes: Routes = [
{ path: 'register', component: RegistrationComponentComponent },
{ path: 'survey-form', loadChildren: () => import('./create-survey-form/create-survey-form.module').then(m => m.CreateSurveyFormModule) },
{ path: 'login', component: LoginComponentComponent },
{
  path:'dashboard',loadChildren:()=> import ('./user-dashboard/user-dashboard.module').then(m=>m.UserDashboardModule)
},
{ path: '**', loadChildren: () => import('./first-page/first-page.module').then(m => m.FirstPageModule)  },

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
