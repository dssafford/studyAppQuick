import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register_in_progress: User;

  constructor(private router: Router) { }

  ngOnInit() {
    this.register_in_progress = User.createBlank();
  }

  cancelPressed() {

    this.router.navigateByUrl('home');
  }

  register() {

  }
}
