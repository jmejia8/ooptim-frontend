import { Component, OnInit, Input } from '@angular/core';
import {EventModel} from '../../models/Event'
import {DateEvent} from '../../models/DateEvent'

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  @Input() event: EventModel;
  @Input() dates: DateEvent[];
  constructor() { }

  ngOnInit(): void {
    console.log("asfd fdsa", event)
  }
  ngAfterContentInit() : void {

  }
}
