import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Product } from './product';

const urlBase = 'http://localhost:8080/';
const mvcCtrl = 'Product/';
const url: string = urlBase + mvcCtrl;

@Injectable()
export class ProductService {

    list(): Promise<Product> {
        return this.http.get(url + 'List')
            .toPromise()
            .then(resp => resp.json() as Product[])
            .catch(this.handleError);
    }

    private handleError(error:any): Promise<any> {
        console.error('An error has occured', error);
        return Promise.reject(error.message || error);
      }

      constructor(private http: Http) { }
}