import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {EntryItem} from '../model/entry-item';

@Injectable()
export class EntrySummaryListService {

  constructor(private http: HttpClient) {
  }

  apiRoot = 'http://localhost:3000';

  // NOTE: since the return is wrapped in a resultcount and results: you must use .results
  // for the return to a SearchItem[]

  getData(): Observable<EntryItem[]> {

    return this.http.get<EntryItem[]>(this.apiRoot + '/entriesShort')
      .map((data: any) => data.result as EntryItem[])
      .do(data => console.log(data));

  }

  getStuff(): string {
    return 'dude';
  }
}
