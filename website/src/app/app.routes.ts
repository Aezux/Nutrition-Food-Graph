import { Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateComponent } from './update/update.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'callback', component: CallbackComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'update', component: UpdateComponent },
    { path: '**', redirectTo: '' }
];
