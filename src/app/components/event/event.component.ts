import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service'
import { EventModel } from '../../models/Event'

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
        this.event = <EventModel>res;
      },
      err => console.log(err)
    )

  }

}
