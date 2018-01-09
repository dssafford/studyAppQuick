import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EntrySummaryListComponent} from './entry-summary-list/entry-summary-list.component';
import {FirstComponent} from './first/first.component';
import {EntryListComponent} from './entry-list/entry-list.component';
import {SecondComponent} from './second/second.component';
import {ThirdComponent} from './third/third.component';
import {FourthComponent} from './fourth/fourth.component';
import {EntryComponent} from './entry/entry.component';

const appRoutes: Routes = [
  {path: '', component: EntryListComponent, pathMatch: 'full'},
  {path: 'newEntry', component: EntryComponent},
  {path: 'home', component: EntryListComponent},
  {path: 'summaryList', component: EntrySummaryListComponent}
  // {path: 'material-design', component: FirstComponent},
  // {path: 'what-up-web', component: SecondComponent},
  // {path: 'my-ally-cli', component: ThirdComponent},
  // {path: 'become-angular-tailer', component: FourthComponent}
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
