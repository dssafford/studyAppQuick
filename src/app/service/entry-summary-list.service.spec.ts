import {TestBed, inject, ComponentFixture, fakeAsync} from '@angular/core/testing';

import {EntrySummaryListService} from './entry-summary-list.service';
import {EntrySummaryListComponent} from '../entry-summary-list/entry-summary-list.component';
import {DebugElement} from '@angular/core';
import {MatTableModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';



describe('EntrySummaryListService', () => {
  let comp:    EntrySummaryListComponent;
  let fixture: ComponentFixture<EntrySummaryListComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;
  let rootEl:      HTMLElement;
  let entryListSummaryService;
  let dougSpy;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntrySummaryListComponent],
      imports: [MatTableModule, HttpClientModule, RouterTestingModule],
      providers: [EntrySummaryListService]
    });

    fixture = TestBed.createComponent(EntrySummaryListComponent);
    comp = fixture.componentInstance;
    rootEl = fixture.debugElement.nativeElement;

    entryListSummaryService = TestBed.get(EntrySummaryListService);

    dougSpy = spyOn(entryListSummaryService, 'getStuff').and
      .returnValue('wowo');

  });

  it('should be created', () => {
    expect(entryListSummaryService).toBeTruthy();
  });



});
