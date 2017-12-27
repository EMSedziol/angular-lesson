import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';
import { Product } from '../product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product;

  constructor(private ProductSvc: ProductService) { }

  ngOnInit() {
    this.ProductSvc.list()
      .then(data => {
       this.products = data;
      console.log(this.products);
      });
  }

}
