import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;
  userIdText: string;

  buttonClick(): void {
      console.log(this.user);
  }

  constructor() { }

  ngOnInit() {
    this.user = new User('1', 'ems', 'ems122', 'Emilie',
    'Sedziol', '513-213-2413', 'ems1234@fuse.bbb',
    'true', 'true');
  }

}
