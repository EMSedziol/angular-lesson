import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { User } from './user';


const urlBase = 'http://localhost:8080/';
const mvcCtrl = 'User/';
const url: string = urlBase + mvcCtrl;


@Injectable()
export class UserService {

  list(): Promise<User[]> {
    return this.http.get(url + 'List')
      .toPromise()
      .then(resp => resp.json() as User[])
      .catch(this.handleError);
  }

  get(id): Promise<User[]> {
    return this.http.get(url + 'Get?id=' + id)
    .toPromise()
    .then (resp => resp.json() as User[])
    .catch(this.handleError);
  }

  private handleError(error:any): Promise<any> {
    console.error('An error has occured', error);
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http) { }

}
