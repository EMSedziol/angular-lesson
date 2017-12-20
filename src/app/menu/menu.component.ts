import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: Menu[] = [
    new Menu('HOME', '/home', 'Home Menu Item'),
    new Menu('User', '/user', 'User interface'),
    new Menu('UserList', '/userlist', 'List of Users'),
    new Menu('ABOUT', '/about', 'About menu item'),
    new Menu('LETTER', '/letter', 'Cover Letter'),
    new Menu('Playground', '/playground', 'See what day it is')

  ];
  constructor() { }

  ngOnInit() {
  }

}
