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
  public loginData = {username: '', password: ''};

  constructor(private authenticationService: AuthenticationService,
              private route: ActivatedRoute,
              private alertService: AlertService,
              private router: Router) {}

  login() {
    this.authenticationService.obtainAccessToken(this.loginData);
  }

  // loginData: any = {};
  returnUrl: string;
  // loading = false;
  // // users: User[];
  //
  // constructor(private router: Router,
  //             private authenticationService: AuthenticationService,
  //             private alertService: AlertService,
  //             private route: ActivatedRoute) { }
  //
  //
  //
  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
    // this.loading = false;
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  //
  // login() {
  //   console.log('in login');
  //   console.log(this.loginData.username + ' - ' + this.model.password);
  //   console.log('returnURL = ' + this.returnUrl);
  //   this.authenticationService.login(this.loginData.username, this.loginData.password)
  //     .subscribe(
  //       data => {
  //         this.router.navigate([this.returnUrl]);
  //       },
  //       error => {
  //         console.log('login error');
  //         this.alertService.error(error);
  //         this.loading = false;
  //       });
  // }
  register() {
    this.router.navigateByUrl('/register');
  }

  cancelPressed() {

    this.router.navigateByUrl('home');
  }

}
