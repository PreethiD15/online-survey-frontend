import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard.component';
import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { MDBBootstrapModule, ChartsModule } from 'angular-bootstrap-md';
import { BadgeModule, IconsModule, WavesModule } from 'angular-bootstrap-md';
import { CardModule } from '../component/card/card.module';
import {
  ModalModule,
  TooltipModule,
  PopoverModule,
  ButtonsModule,
} from 'angular-bootstrap-md';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [UserDashboardComponent],
  exports:[UserDashboardComponent],
  imports: [
    CommonModule,
    CardModule,
    ModalModule,
    TooltipModule,
    ChartsModule,
    PopoverModule,
    ButtonsModule,
    MDBBootstrapModule.forRoot(),
    NgBootstrapFormValidationModule.forRoot(),
    UserDashboardRoutingModule,
    BadgeModule,
    IconsModule,
    WavesModule,
    MaterialModule
  ],
})
export class UserDashboardModule {}
