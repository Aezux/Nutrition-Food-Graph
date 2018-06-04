import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  user_name: string;
  user_weight: string;
  user_feet: string;
  user_inches: string;
  user_email: string;

  submit() {
    localStorage.setItem('user_name', this.user_name);
    localStorage.setItem('user_weight', this.user_weight);
    localStorage.setItem('user_feet', this.user_feet);
    localStorage.setItem('user_inches', this.user_inches);
    localStorage.setItem('user_email', this.user_email);
  }

  constructor() { }

  ngOnInit() {
  }

}
