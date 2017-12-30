import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';


import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { UpdateComponent } from './update/update.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import {EntryListService} from './service/entry-list.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatFormFieldModule, MatInput,
  MatOptionModule, MatSelect, MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    UpdateComponent,
    EntryListComponent, MatInput
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, HttpClientModule, MatToolbarModule, MatTableModule, MatSortModule,
    ReactiveFormsModule, FormsModule, MatFormFieldModule, MatOptionModule, MatSelectModule
  ],
  providers: [EntryListService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule { }
