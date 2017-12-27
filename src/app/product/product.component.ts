import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product;
  userIdText: string;

  buttonClick(): void {
    console.log(this.product);
  }
  constructor() { }

  ngOnInit() {
    this.product = new Product('1','1', 'k2s0', 'walking thing',
        '50000000.00', 'each', '');
  }

}
