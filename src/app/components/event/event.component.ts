import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service'
import { EventModel } from '../../models/Event'
import { DateEvent } from '../../models/DateEvent'

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  event : EventModel = new EventModel();

  constructor(public eventService : EventService) { }

  ngOnInit(): void {
    this.getEvent()
  }

  getEvent(){
    this.eventService.getEvent().subscribe(
      res => {
        // this.eventService.event = res;
        Object.keys(res).forEach((key) => (res[key] == null) &&  (res[key] = {}));
        this.event = <EventModel>res;
        //this.event.dates = res["dates"].map( d => <DateEvent>d );
        console.log(this.event)
      },
      err => console.log(err)
    )

  }

}
