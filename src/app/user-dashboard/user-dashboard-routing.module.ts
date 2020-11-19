import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import {UserDashboardComponent  } from './user-dashboard.component';



const routes: Routes = [  { path: '', component: UserDashboardComponent  },


];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
