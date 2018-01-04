import { TestBed, inject } from '@angular/core/testing';

import { EntryListService } from './entry-list.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

describe('EntryListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntryListService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([EntryListService], (service: EntryListService) => {
    expect(service).toBeTruthy();
  }));
});
