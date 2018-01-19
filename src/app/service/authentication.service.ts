﻿import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {User} from '../model/user';
import {Router} from '@angular/router'
import 'rxjs/add/operator/catch';
import {Cookie} from 'ng2-cookies';

@Injectable()
export class AuthenticationService {

  constructor(
    private router: Router, private http: HttpClient){}


  private returnedToken: string;

  obtainAccessToken(loginData) {
    const params = new URLSearchParams();
    params.append('username', loginData.username);
    params.append('password', loginData.password);
    params.append('grant_type', 'password');
    // params.append('client_id','doug-client');


    const headers = new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Authorization': 'Basic ' + btoa('doug-client:doug-secret')});

    // let options = new RequestOptions({ headers: headers });


    this.http.post('http://localhost:8005/oauth/token', params.toString(),
      {headers: headers})
      .subscribe(
        data => this.saveToken(data),
        err => alert('Invalid Credentials')
      );

  }

  saveToken(token) {
    console.log('in save token');
    const expireDate = new Date().getTime() + (1000 * token.expires_in);
    Cookie.set('access_token', token.access_token, expireDate);
    console.log('Obtained Access token=' + token.access_token.toString());
    this.router.navigate(['/']);
  }

  getResource(resourceUrl): Observable<User>{
    console.log('in getResource');
    const headers = new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Authorization': 'Bearer '  + Cookie.get('access_token')});
    // let options = new RequestOptions({ headers: headers });

    return this.http.get<User>(resourceUrl)
      .map((data: any) => data.results as User)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    // return this._http.get(resourceUrl, options)
    //   .map((res: Response) => res.json())
    //   .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  checkCredentials(){
    if (!Cookie.check('access_token')) {
      this.router.navigate(['/login']);
    }
  }

  logout() {
    Cookie.delete('access_token');
    this.router.navigate(['/login']);
  }
}


// For using LOCALSTORAGE and a fake jwt token
    // login(username: string, password: string) {
    //     return this.http.post<any>('/api/authenticate', { username: username, password: password })
    //         .map(user => {
    //             // login successful if there's a jwt token in the response
    //             if (user && user.token) {
    //                 // store user details and jwt token in local storage to keep user logged in between page refreshes
    //                 localStorage.setItem('currentUser', JSON.stringify(user));
    //                 console.log('set local user = ' +  JSON.stringify(user));
    //             }
    //
    //             return user;
    //         });
    // }
    //
    // logout() {
    //     // remove user from local storage to log user out
    //     localStorage.removeItem('currentUser');
    // }
// }
