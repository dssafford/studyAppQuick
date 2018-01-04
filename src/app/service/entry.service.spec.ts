import { TestBed, inject } from '@angular/core/testing';
import { EntryService } from './entry.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('EntryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntryService],
      imports: [HttpClientModule],
    });
  });

  it('should be created', inject([EntryService], (service: EntryService) => {
    expect(service).toBeTruthy();
  }));
});
