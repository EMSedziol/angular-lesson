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
    new Menu('Vendor', '/vendor', 'vendor'),
    new Menu('VendorList', '/vendorlist', 'List of Vendors'),
    new Menu('Product', '/product', 'Product!'),
    new Menu('ProductList', '/productlist', 'List of Products'),
    new Menu('Upload', '/upload', 'Upload Data')

  ];
  constructor() { }

  ngOnInit() {
  }

}
