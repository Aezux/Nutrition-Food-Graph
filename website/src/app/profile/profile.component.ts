import { Component, OnInit } from '@angular/core';
import { UpdateComponent } from "../update/update.component";
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  update: UpdateComponent;
  feet: string = localStorage.getItem('user_feet');
  inches: string = localStorage.getItem('user_inches');
  profile_height: string = this.feet + " feet, " + this.inches + " inches";
  profile_weight: string = localStorage.getItem('user_weight') + " lbs";
  profile_email: string = localStorage.getItem('user_email');
  profile_name: string = localStorage.getItem('user_name');

  clicked() {
    console.log("Button clicked");
  }

  constructor() { }

  ngOnInit() {
  }

}
