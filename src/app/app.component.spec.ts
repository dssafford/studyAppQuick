import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';

import {
  MatCardModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInput, MatInputModule, MatMenuModule, MatOptionModule,
  MatSelectModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {EntryListService} from './service/entry-list.service';
import {EntrySummaryListService} from './service/entry-summary-list.service';
import {EntryService} from './service/entry.service';
import {EntrySummaryListComponent} from './entry-summary-list/entry-summary-list.component';
import {MenuItemComponent} from './menu-item/menu-item.component';
import {RouterTestingModule} from '@angular/router/testing';
import {EntryListComponent} from './entry-list/entry-list.component';
import {EntryComponent} from './entry/entry.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import {ThirdComponent} from './third/third.component';
import {FourthComponent} from './fourth/fourth.component';
import {AppRoutingModule} from './app-routing.module';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, EntrySummaryListComponent, MenuItemComponent, EntryComponent, EntryListComponent,
        FirstComponent, SecondComponent, ThirdComponent, FourthComponent
      ],
      imports: [MatTableModule, HttpClientModule,
        MatInputModule, MatIconModule, MatFormFieldModule, MatGridListModule, MatOptionModule,
        MatSelectModule, MatCardModule, MatMenuModule, MatToolbarModule, FormsModule, ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [EntryListService, EntryService, EntrySummaryListService],
    }).compileComponents();
  }));


  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));


  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});
