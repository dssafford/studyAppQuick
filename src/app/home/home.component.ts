import { Component, OnInit } from '@angular/core';

import { User } from '../model/user';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  currentUser: User;
  users: User[] = [];
  // isLoggedIn = false;

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log('user=' + this.currentUser);

        // if (this.currentUser != null) {
        //   this.isLoggedIn = true;
        // }
    }

    ngOnInit() {
      // console.log('isLoggedIn?= ' + this.isLoggedIn);
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers(); });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
}
