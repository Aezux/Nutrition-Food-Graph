import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  feet: string = localStorage.getItem('user_feet');
  inches: string = localStorage.getItem('user_inches');
  profile_height: string = this.feet + " feet, " + this.inches + " inches";
  profile_weight: string = localStorage.getItem('user_weight') + " lbs";
  profile_email: string = localStorage.getItem('user_email');
  profile_name: string = localStorage.getItem('user_name');

  constructor() { }

  ngOnInit() {
  }

}
