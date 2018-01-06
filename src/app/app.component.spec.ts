import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {RouterTestingModule} from '@angular/router/testing';
import {MatIconModule, MatMenuModule, MatTableModule, MatToolbarModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {EntryListService} from './service/entry-list.service';
import {EntrySummaryListService} from './service/entry-summary-list.service';
import {EntryService} from './service/entry.service';
import {EntrySummaryListComponent} from './entry-summary-list/entry-summary-list.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, EntrySummaryListComponent
      ],
      imports: [ MatTableModule, HttpClientModule, RouterTestingModule, MatIconModule, MatMenuModule,
      MatToolbarModule],
      providers: [EntryListService, EntryService,  EntrySummaryListService],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});
