import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthenticationService} from '../service/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private userService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      this.userService.checkCredentials();

      if(this.userService.getResource('http://localhost:8005/users/user=')) {

        return true;
      }

        // if (localStorage.getItem('currentUser')) {
        //     // logged in so return true
        //   console.log('logged in');
        //   console.log('current user = ' + localStorage.getItem('currentUser'));
        //     return true;
        // }
          console.log('not logged in, go to login screen');
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
