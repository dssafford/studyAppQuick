import { Component, OnInit } from '@angular/core';
import {EntryItem} from '../model/entry-item';
import {EntryService} from '../service/entry.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  // today: number = Date.now();
  today: number = Date.now();
  entry_in_progress: EntryItem;
   d = new Date();


  constructor(private entryService: EntryService,
              private router: Router) {
    this.entry_in_progress = EntryItem.createBlank();
  }

  ngOnInit() {
    this.entry_in_progress.Date_Added = this.formatDate(this.d);
    this.entry_in_progress.Is_Active = 'active';
    this.bootStrapValues();
  }

  onAction1() {
    console.log('in onAction1 method');
    console.log(this.entry_in_progress);

    this.entryService.addNewEntry(this.entry_in_progress)
      .then((entryItem) => {
        this.router.navigateByUrl('home');
      });
  }

  bootStrapValues() {
    this.entry_in_progress.Machine = 'iMac';
    this.entry_in_progress.Comments = this.formatDate(this.d) + ' - Comments Here';
    this.entry_in_progress.Project = 'Project here';
    this.entry_in_progress.Technology = 'Angular, Go';
    this.entry_in_progress.Version = '4+';
    this.entry_in_progress.File_Directory = 'angularwork/production';
  }

  formatDate(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const strTime = hours + ':' + minutes + ' ' + ampm;
    return date.getFullYear() + '-' + date.getMonth() + 1 + '-' + date.getDate() + '  ' + strTime;
  }


}
