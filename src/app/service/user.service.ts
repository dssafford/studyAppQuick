import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/user';
import {AuthenticationService} from './authentication.service';

// const url = 'http://localhost:8005';

@Injectable()
export class UserService {

    constructor(private http: HttpClient,
                private authenticationService: AuthenticationService) { }

    getAll() {
        return this.http.get<User[]>('/users/users');
    }

    getById(id: number) {
        return this.http.get('/users/users/' + id);
    }

    create(user: User) {
      const url = 'http://localhost:8005/users/user' +
        this.authenticationService.getToken();

      console.log('token=' + this.authenticationService.getToken());

      // const params = new URLSearchParams();
      // params.append('username', user.username);
      // params.append('password', user.password);
      // params.append('grant_type', 'password');


      const headers = new HttpHeaders({'Content-type': 'application/json'});
      console.log(url);
      console.log(user);

      // this.http.post(url, user, {headers: headers});


      return this.http.post(url, user, {headers: headers});
    }

    update(user: User) {
        return this.http.put('/users/users/' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete('/users/users/' + id);
    }
}
