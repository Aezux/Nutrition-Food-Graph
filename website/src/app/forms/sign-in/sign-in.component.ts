import { Component, OnInit } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
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