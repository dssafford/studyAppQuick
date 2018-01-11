import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login_in_progress: User;

  constructor(private router: Router) { }



  ngOnInit() {
    this.login_in_progress = User.createBlank();
  }

  cancelPressed() {

    this.router.navigateByUrl('home');
  }

  login() {

  }
}
