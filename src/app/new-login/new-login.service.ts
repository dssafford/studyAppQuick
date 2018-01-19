import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import { Cookie } from 'ng2-cookies';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {User} from '../model/user';


@Injectable()
export class NewLoginService {
  constructor(
    private _router: Router, private _http: Http){}

  obtainAccessToken(loginData) {
    // let params = new URLSearchParams();
    // params.append('Username',loginData.username);
    // params.append('Password',loginData.password);
    // params.append('grant_type','password');
    // params.append('client_id','doug-client');
    let params = new URLSearchParams();
    params.append('username','Alex123');
    params.append('password','password');
    params.append('grant_type','password');
    // params.append('client_id','doug-client');


    let headers = new Headers({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Basic ' + btoa('doug-client:doug-secret')});

    let options = new RequestOptions({ headers: headers });


    this._http.post('http://localhost:8005/oauth/token', params.toString(), options)
      .map(res => res.json())
      .subscribe(
        data => this.saveToken(data),
        err => alert('Invalid Credentials')
      );

  }

  // call(): Observable<any> {
  //   let url: string = 'http://localhost:8005/oauth/token';
  //   let username: string = 'username';
  //   let password: string = 'password';
  //   let headers: Headers = new Headers();
  //   headers.append("Authorization", "Basic " + btoa(username + ":" + password));
  //   headers.append("Content-Type", "application/x-www-form-urlencoded");
  //   return this._http.post(url, data, {headers: headers});
  //
  // }

  saveToken(token){
    console.log('in save token');
    var expireDate = new Date().getTime() + (1000 * token.expires_in);
    Cookie.set("access_token", token.access_token, expireDate);
    console.log('Obtained Access token=' + token.access_token.toString());
    this._router.navigate(['/']);
  }

  getResource(resourceUrl) : Observable<User>{
    var headers = new Headers({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Bearer '  + Cookie.get('access_token')});
    var options = new RequestOptions({ headers: headers });
    return this._http.get(resourceUrl, options)
      .map((res: Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  checkCredentials(){
    if (!Cookie.check('access_token')){
      this._router.navigate(['/login']);
    }
  }

  logout() {
    Cookie.delete('access_token');
    this._router.navigate(['/login']);
  }
}
