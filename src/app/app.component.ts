import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ViewEncapsulation} from '@angular/core';
import {VERSION} from '@angular/material';
import {NavItem} from './model/nav-item';
import {NAVITEMS} from './data/nav-items';
import {AuthenticationService} from './service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';
  version = VERSION;
  navItems: NavItem[] = NAVITEMS;


  constructor(private router: Router, private userService: AuthenticationService) {
  }

  addNewEntryPressed(): void {
    this.router.navigateByUrl('/newEntry');
  }

  logout(): void {
    console.log('logged out');
    this.userService.logout();
    this.router.navigateByUrl('/login');
  }

}
