import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EntrySummaryListComponent} from './entry-summary-list/entry-summary-list.component';
import {FirstComponent} from './first/first.component';
import {EntryListComponent} from './entry-list/entry-list.component';
import {SecondComponent} from './second/second.component';
import {ThirdComponent} from './third/third.component';
import {FourthComponent} from './fourth/fourth.component';
import {EntryComponent} from './entry/entry.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthGuard} from './data/auth.guard';
import {NewHomeComponent} from './new-home/new-home.component';
import {NewLoginComponent} from './new-login/new-login.component';


const appRoutes: Routes = [

  {path: 'newEntry', component: EntryComponent, canActivate: [AuthGuard]},
  {path: 'home', component: EntryListComponent, canActivate: [AuthGuard]},
  {path: 'summaryList', component: EntrySummaryListComponent, canActivate: [AuthGuard]},
  {path: 'errInput', component: FirstComponent, canActivate: [AuthGuard]},
  // {path: 'what-up-web', component: SecondComponent},
  // {path: 'my-ally-cli', component: ThirdComponent},
  // {path: 'become-angular-tailer', component: FourthComponent},
  // {path: '', component: EntryListComponent},

  { path: '', component: NewHomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component:  NewLoginComponent },

  // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  // { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
