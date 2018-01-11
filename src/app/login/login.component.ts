import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../service/authentication.service';
import {AlertService} from '../service/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  returnUrl: string;
  loading = false;
  // users: User[];

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private alertService: AlertService,
              private route: ActivatedRoute) { }



  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
    // this.loading = false;
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    console.log('in login');
    console.log(this.model.username + ' - ' + this.model.password);
    console.log('returnURL = ' + this.returnUrl);
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
  register() {
    this.router.navigateByUrl('/register');
  }

  cancelPressed() {

    this.router.navigateByUrl('home');
  }

}
