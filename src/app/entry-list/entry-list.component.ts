import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import {EntryListService} from '../service/entry-list.service';
import {EntryItem} from '../model/entry-item';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  displayedColumns = ['id', 'date_added', 'file_directory', 'project', 'machine',
  'technology', 'version', 'comments', 'is_active'];

  dataSource: UserDataSource;

  constructor(private entryListService: EntryListService) { }


  getData() {
    this.dataSource = new UserDataSource(this.entryListService);
    return this.entryListService.getData();
  }

  ngOnInit() {
    this.getData();
  }

}

export class UserDataSource extends DataSource<any> {
  constructor(private entryListService: EntryListService) {
    super();
  }
  connect(): Observable<EntryItem[]> {
    return this.entryListService.getData();
  }
  disconnect() {}
}

