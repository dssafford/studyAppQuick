import { Component, OnInit } from '@angular/core';
import {EntrySummaryListService} from '../service/entry-summary-list.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {DataSource} from '@angular/cdk/collections';
import {EntryItem} from '../model/entry-item';
import {AuthenticationService} from '../service/authentication.service';


@Component({
  selector: 'app-entry-summary-list',
  templateUrl: './entry-summary-list.component.html',
  styleUrls: ['./entry-summary-list.component.css']
})
export class EntrySummaryListComponent implements OnInit {

  displayedColumns = ['id', 'project', 'technology', 'comments'];

  dataSource: UserSummaryDataSource;

  testvar: 'wow';

  constructor(private entrySummaryListService: EntrySummaryListService,
              private authenticationService: AuthenticationService,
              private router: Router) { }


  getData() {
    this.dataSource = new UserSummaryDataSource(this.entrySummaryListService);
    return this.entrySummaryListService.getData();
  }

  ngOnInit() {
      this.authenticationService.checkCredentials();
    this.getData();
    this.entrySummaryListService.getStuff();
  }

}

export class UserSummaryDataSource extends DataSource<any> {
  constructor(private entrySummaryListService: EntrySummaryListService) {
    super();
  }
  connect(): Observable<EntryItem[]> {
    return this.entrySummaryListService.getData();
  }
  disconnect() {}
}
