import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service'

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(public eventService : EventService) { }

  ngOnInit(): void {
    this.getEvent()
  }

  getEvent(){
    this.eventService.getEvent().subscribe(
      res => {
        this.eventService.event = res;
      },
      err => console.log(err)
    )

  }

}
