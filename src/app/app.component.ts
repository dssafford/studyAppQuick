import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ViewEncapsulation} from '@angular/core';
import {VERSION} from '@angular/material';
import {NavItem} from './model/nav-item';
import {NAVITEMS} from './data/nav-items';

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


  constructor(private router: Router) {
  }

  addNewEntryPressed(): void {
    this.router.navigateByUrl('/newEntry');
  }

  logout(): void {
    this.router.navigateByUrl('/login');
  }

}
