import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {Router} from '@angular/router';
import {AlertService} from '../service/alert.service';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  loading = false;
  // register_in_progress: User;
  model: any = {};

  constructor(private router: Router,
              private alertService: AlertService,
              private userService: UserService)
  { }

  cancelPressed() {

    this.router.navigateByUrl('home');
  }

  register() {
    this.loading = true;
    this.userService.create(this.model)
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
