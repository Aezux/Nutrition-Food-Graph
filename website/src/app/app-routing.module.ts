import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent} from './forms/sign-in/sign-in.component';
import { SignUpComponent} from './forms/sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'update', component: UpdateComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
