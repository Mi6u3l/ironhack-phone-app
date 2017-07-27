import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SessionService {
  BASE_URL: string = 'http://localhost:3000';

  public user = {};
  public token = {};
  public isAuthenticated = false;

  constructor(private http: Http) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  login(user) {
    return this.http.post(`${this.BASE_URL}/login`, user)
      .map(res => {
        let json = res.json();
        let token = json.token;
        let user = json.user;

        if (token) {
          this.token = token;
          this.user = {
            _id: user.id,
            username: user.username
          }
          this.isAuthenticated = true;
        }
        
        return this.isAuthenticated;

      }).catch(this.handleError);
  }
}
