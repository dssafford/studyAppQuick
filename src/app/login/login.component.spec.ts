import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {
  MatButtonModule, MatButtonToggleModule, MatCardModule,
  MatFormFieldModule,
  MatGridListModule, MatIconModule, MatInputModule, MatMenuModule, MatOptionModule, MatSelectModule, MatSortModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserModule} from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, MatToolbarModule, MatTableModule, MatSortModule,
      ReactiveFormsModule, MatMenuModule, MatIconModule, FormsModule, MatFormFieldModule, MatOptionModule, MatSelectModule,
      MatCardModule, MatButtonModule, MatButtonToggleModule, RouterTestingModule,
      MatGridListModule, MatInputModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
