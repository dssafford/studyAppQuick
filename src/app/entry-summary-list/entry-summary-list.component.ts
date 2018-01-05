import { Component, OnInit } from '@angular/core';
import {EntrySummaryListService} from '../service/entry-summary-list.service';

@Component({
  selector: 'app-entry-summary-list',
  templateUrl: './entry-summary-list.component.html',
  styleUrls: ['./entry-summary-list.component.css']
})
export class EntrySummaryListComponent implements OnInit {

  constructor(public entrySummaryListService: EntrySummaryListService) { }

  ngOnInit(): void {
    this.entrySummaryListService.getStuff();
  }

}
