import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignUpPageComponent } from './sign-up/sign-up-page/sign-up-page.component';
import { HeaderComponent } from './header/header.component';
import { LogInComponent } from './profile/log-in/log-in.component'


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SignUpComponent,
    SignUpPageComponent,
    HeaderComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
