import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsComponent } from './forms/forms.component';
import { SignInComponent } from './forms/sign-in/sign-in.component'
import { SignUpComponent } from './forms/sign-up/sign-up.component';
import { UpdateComponent } from './update/update.component';
import { AppRoutingModule } from './/app-routing.module';
import { MapComponent } from './map/map.component';
import { GraphComponent } from './graph/graph.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    FormsComponent,
    SignInComponent,
    SignUpComponent,
    UpdateComponent,
    MapComponent,
    GraphComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA7CAEFcQxxlHVLjr8GcaMAH6zZy7aDX8A'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
