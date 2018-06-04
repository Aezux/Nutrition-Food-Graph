import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  name: String = "";

  getUser() {
    return name;
  }

}
