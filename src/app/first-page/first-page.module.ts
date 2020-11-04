import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstPageComponent } from './first-page.component';
import { FirstPageRoutingModule } from './first-page-routing.module';



@NgModule({
  declarations: [FirstPageComponent],
  exports: [FirstPageComponent],
  imports: [
    CommonModule,
    FirstPageRoutingModule
  ]
})
export class FirstPageModule { }
