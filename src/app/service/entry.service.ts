import { Injectable } from '@angular/core';
import {EntryItem} from '../model/entry-item';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class EntryService {

  constructor(private http: HttpClient) { }

  // addNewEntry(entryItem: EntryItem): Promise<EntryItem> {
  //   return this.http
  //     .post('http://localhost:3000' + '/entry', entryItem)
  //     .toPromise()
  //     .then(response => response.json().data as EntryItem)
  //     .catch(this.handleError);
  // }


  addNewEntry(entryItem: EntryItem): Promise<EntryItem> {
    return this.http
      .post('http://localhost:3000' + '/entry', entryItem)
      .toPromise()
      .then(response => response as EntryItem)
      .catch(this.handleError);
  }
// .map((data: any) => data.result as EntryItem[])
// .do(data => console.log(data));



  private handleError(error: any): Promise<any> {
    console.error('ERROR OCCURRED TALKING TO SERVER' + error);
    return Promise.reject(error.message || error);
  }

}
