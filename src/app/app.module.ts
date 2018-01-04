import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';


import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { UpdateComponent } from './update/update.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import {EntryListService} from './service/entry-list.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule, MatButtonToggleModule,
  MatCardModule,
  MatFormFieldModule, MatGridListModule, MatIconModule, MatInput, MatMenuModule,
  MatOptionModule, MatSelect, MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {RouterModule} from '@angular/router';
import {EntryService} from './service/entry.service';
import {HttpModule} from '@angular/http';
import { TestMatComponent } from './test-mat/test-mat.component';


@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    UpdateComponent,
    EntryListComponent, MatInput, TestMatComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, HttpClientModule, MatToolbarModule, MatTableModule, MatSortModule,
    ReactiveFormsModule, MatMenuModule, MatIconModule, FormsModule, MatFormFieldModule, MatOptionModule, MatSelectModule,
    MatCardModule, MatButtonModule, MatButtonToggleModule,
    MatGridListModule, HttpModule, RouterModule.forRoot([
      {
        path: 'newEntry',
        component: EntryComponent
      },
      {
        path: 'home',
        component: EntryListComponent
      },

      ])
    ],
  providers: [EntryListService, EntryService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],

})
export class AppModule { }
