import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Rx';
import { SessionService } from './session.service';

@Injectable()
export class PhoneService {
  BASE_URL: string = 'http://localhost:3000';
  
  constructor(
    private http: Http,
    private session: SessionService
  ) {}

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  getList() {
    return this.http.get(`${this.BASE_URL}/api/phones`, this.requestOptions())
      .map((res) => res.json())
      .catch(this.handleError);
  }
  
  get(id) {
    return this.http.get(`${this.BASE_URL}/api/phones/${id}`, this.requestOptions())
      .map((res) => res.json())
      .catch(this.handleError);
  }
  
  edit(phone) {
    return this.http.put(`${this.BASE_URL}/api/phones/${phone.id}`, phone, this.requestOptions())
      .map((res) => res.json())
      .catch(this.handleError);
  }
  
  remove(id) {
    return this.http.delete(`${this.BASE_URL}/api/phones/${id}`, this.requestOptions())
      .map((res) => res.json())
      .catch(this.handleError);
  }

  private requestOptions(): RequestOptions {
    let headers = new Headers({ 'Authorization': `JWT ${this.session.token}` });
    return new RequestOptions({ headers: headers });
  }
}
