import { Component, OnInit } from '@angular/core';
import { Vendor } from './vendor';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  vendor: Vendor;
  userIdText: string;

  buttonClick(): void {
    console.log(this.vendor);
  }
  constructor() { }

  ngOnInit() {
    this.vendor = new Vendor('11', 'bb', 'bob', '1212 nowhere', 'NewPort',
      'KY', '44444', '859-212-2541', 'bob@nowhere.com');
  }

}
