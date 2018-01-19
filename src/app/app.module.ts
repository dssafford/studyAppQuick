import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';


import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { UpdateComponent } from './update/update.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import {EntryListService} from './service/entry-list.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule, MatButtonToggleModule,
  MatCardModule,
  MatFormFieldModule, MatGridListModule, MatIconModule, MatInput, MatMenuModule,
  MatOptionModule, MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';

import {EntryService} from './service/entry.service';
import {HttpModule} from '@angular/http';
import { TestMatComponent } from './test-mat/test-mat.component';
import { EntrySummaryListComponent } from './entry-summary-list/entry-summary-list.component';
import {EntrySummaryListService} from './service/entry-summary-list.service';
import {FourthComponent} from './fourth/fourth.component';
import {ThirdComponent} from './third/third.component';
import {SecondComponent} from './second/second.component';
import {FirstComponent} from './first/first.component';
import {MenuItemComponent} from './menu-item/menu-item.component';
import { AlertComponent } from './alert/alert.component';
import {AppRoutingModule} from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AuthGuard} from './data/auth.guard';
import {AlertService} from './service/alert.service';
import {AuthenticationService} from './service/authentication.service';
import {UserService} from './service/user.service';
import {JwtInterceptor} from './helpers/jwt.interceptor';
import {fakeBackendProvider} from './helpers/fake-backend';
import {HomeComponent} from './home/home.component';
import { NewLoginComponent } from './new-login/new-login.component';
import { NewHomeComponent } from './new-home/new-home.component';
import {NewLoginService} from './new-login/new-login.service';


@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    UpdateComponent,
    EntryListComponent,
    MatInput,
    TestMatComponent,
    EntrySummaryListComponent,
    MenuItemComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NewLoginComponent,
    NewHomeComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, HttpClientModule, MatToolbarModule, MatTableModule, MatSortModule,
    ReactiveFormsModule, MatMenuModule, MatIconModule, FormsModule, MatFormFieldModule, MatOptionModule, MatSelectModule,
    MatCardModule, MatButtonModule, MatButtonToggleModule,
    MatGridListModule, HttpModule, AppRoutingModule,
    ],
  providers: [EntryListService, EntryService, EntrySummaryListService, AuthGuard,
    AlertService,
    AuthenticationService,
    UserService, NewLoginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },

    // provider used to create fake backend
    fakeBackendProvider],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],

})
export class AppModule { }
