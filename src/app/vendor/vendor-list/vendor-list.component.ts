import { Component, OnInit } from '@angular/core';

import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  vendors: Vendor[];

  constructor(private VendorSvc: VendorService) { }

  ngOnInit() {
    this.VendorSvc.list()
      .then(data => {
        this.vendors = data;
        console.log(this.vendors);
      });
  }

}
