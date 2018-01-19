import { Component, OnInit } from '@angular/core';
import {NewLoginService} from './new-login.service';

@Component({
  selector: 'app-new-login',
  templateUrl: './new-login.component.html',
  styleUrls: ['./new-login.component.css']
})
export class NewLoginComponent implements OnInit {
  public loginData = {username: '', password: ''};

  constructor(private _service: NewLoginService) {}

  login() {
    this._service.obtainAccessToken(this.loginData);
  }

  ngOnInit() {
  }

}
