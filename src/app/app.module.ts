import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponentComponent,
    LoginComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
