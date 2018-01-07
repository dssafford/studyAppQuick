import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {EntrySummaryListComponent} from './entry-summary-list.component';
import {RouterTestingModule} from '@angular/router/testing';
import {MatTableModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {EntrySummaryListService} from '../service/entry-summary-list.service';

let component: EntrySummaryListComponent;
let fixture: ComponentFixture<EntrySummaryListComponent>;
let entrySummaryListService;
let dougSpy;

describe('EntrySummaryListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EntrySummaryListComponent],
      imports: [MatTableModule, HttpClientModule, RouterTestingModule],
      providers: [EntrySummaryListService],

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrySummaryListComponent);
    component = fixture.componentInstance;

    // UserService from the root injector
    entrySummaryListService = TestBed.get(EntrySummaryListService);


    dougSpy = spyOn(entrySummaryListService, 'getStuff').
    and.returnValue('wow');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should have been called', () => {

    expect(dougSpy.calls.any()).toBe(true, 'hey failed');

  });

  xit('should show getDude return string', () => {
      expect(dougSpy.calls.mostRecent().returnValue).toBe('wow');
    });
  });

