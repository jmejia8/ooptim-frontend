import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  slug: string;
  constructor(public eventService : EventService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        console.log("slug ", params.get('slug'));
        this.slug = params.get('slug');
    });

    if(this.slug){
      this.getEvent()

    }
    //this.getEvent()
  }

  getEvent(){
    this.eventService.getEvent(this.slug).subscribe(
      res => {
        // this.eventService.event = res;
        Object.keys(res).forEach((key) => (res[key] == null) &&  (res[key] = {}));
        this.event = <EventModel>res[0];
        //this.event.dates = res["dates"].map( d => <DateEvent>d );
        console.log(this.event)
      },
      err => console.log(err)
    )

  }

}
