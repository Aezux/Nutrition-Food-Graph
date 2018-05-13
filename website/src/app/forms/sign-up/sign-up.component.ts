import { Component, OnInit } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  user: User;

  constructor() {
    this.user = new User({
      email: '', 
      password: ''
    });
  }

  ngOnInit() {
  }

  onFormSubmit({ value, valid }: { value: User, valid: boolean }) {
    this.user = value;
  }
}