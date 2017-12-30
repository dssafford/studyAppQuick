import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {EntryItem} from '../model/entry-item';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class EntryListService {
  constructor(private http: HttpClient) {}

  apiRoot = 'http://localhost:3000';

  // NOTE: since the return is wrapped in a resultcount and results: you must use .results
  // for the return to a SearchItem[]

  getData(): Observable<EntryItem[]> {

    return this.http.get<EntryItem[]>(this.apiRoot + '/entries')
      .map((data: any) => data.result as EntryItem[])
      .do(data => console.log(data));

  }
}
