import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {EntryListComponent} from './entry-list.component';
import {MatTableModule} from '@angular/material';
import {EntryListService} from '../service/entry-list.service';
import {HttpClientModule} from '@angular/common/http';

import {RouterTestingModule} from '@angular/router/testing';


describe('AlertComponent', () => {
  let component: EntryListComponent;
  let fixture: ComponentFixture<EntryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryListComponent ],
      imports: [MatTableModule, HttpClientModule, RouterTestingModule],
      providers: [EntryListService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
