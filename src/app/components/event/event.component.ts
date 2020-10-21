import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Title} from "@angular/platform-browser";
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
  constructor(public eventService : EventService, private route: ActivatedRoute, private router: Router,private titleService:Title) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        console.log("slug ", params.get('slug'));
        this.slug = params.get('slug');
    });

    if(this.slug){
      this.getEvent()

    }else{
      this.router.navigate(['/home'])
    }
    //this.getEvent()
  }

  getEvent(){
    this.eventService.getEvent(this.slug).subscribe(
      res_arr => {
        // this.eventService.event = res;
        console.log("res", res_arr)
        if( !Array.isArray(res_arr) || res_arr.length == 0){
          console.log("no event", res_arr)
          this.router.navigate(['/home']);
          return;
        }
        
        let res = res_arr[0]
        Object.keys(res).forEach((key) => (res[key] == null) &&  (res[key] = {}));
        this.event = <EventModel>res;
        //this.event.dates = res["dates"].map( d => <DateEvent>d );
        console.log(this.event)
        this.titleService.setTitle(this.event.title + " - Ooptim");
      },
      err => {
        console.log(err)
        this.router.navigate(['/home']);
        this.titleService.setTitle("Event not found - Optim");
        
      }

    )

  }

}
