import { Component, OnInit } from '@angular/core';
import {NewLoginService} from '../new-login/new-login.service';

@Component({
  selector: 'app-new-home',
  templateUrl: './new-home.component.html',
  styleUrls: ['./new-home.component.css']
})
export class NewHomeComponent implements OnInit {
  constructor(private _service: NewLoginService) {
  }

  ngOnInit() {
    this._service.checkCredentials();
  }

  logout() {
    this._service.logout();
  }
}

