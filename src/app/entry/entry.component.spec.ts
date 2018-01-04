import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryComponent } from './entry.component';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule, MatFormFieldControl, MatFormFieldModule, MatGridListModule,
  MatIconModule, MatInputModule, MatMenuModule, MatOptionModule, MatSelectModule, MatSortModule, MatTableModule,
  MatToolbarModule,
} from '@angular/material';
import {EntryListService} from '../service/entry-list.service';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EntryService} from '../service/entry.service';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


describe('EntryComponent', () => {
  let component: EntryComponent;
  let fixture: ComponentFixture<EntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryComponent],
      imports: [     BrowserModule, BrowserAnimationsModule, HttpClientModule, MatToolbarModule, MatTableModule, MatSortModule,
        ReactiveFormsModule, MatMenuModule, MatIconModule, FormsModule, MatFormFieldModule, MatOptionModule, MatSelectModule,
        MatCardModule, MatButtonModule, MatButtonToggleModule, RouterTestingModule,
        MatGridListModule, MatInputModule],
      providers: [EntryListService, EntryService, MatFormFieldControl],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should send the proper date now format to mysql', () => {
  //
  //   component.displayFormatDate(component.d)
  //
  // });
});
