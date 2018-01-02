import { Injectable } from '@angular/core';
import {EntryItem} from '../model/entry-item';
import {Http} from '@angular/http';

@Injectable()
export class EntryService {

  constructor(private http: Http) { }

  addNewEntry(entryItem: EntryItem): Promise<EntryItem> {
    return this.http
      .post('http://localhost:3000' + '/entry', entryItem)
      .toPromise()
      .then(response => response.json().data as EntryItem)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('ERROR OCCURRED TALKING TO SERVER' + error);
    return Promise.reject(error.message || error);
  }

}
