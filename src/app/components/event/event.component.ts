import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Title} from "@angular/platform-browser";
import { EventService } from '../../services/event.service'
import { EventModel } from '../../models/Event'
import { DateEvent } from '../../models/DateEvent'
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  event : EventModel = new EventModel();
  slug: string;
  constructor(public eventService : EventService, private route: ActivatedRoute, private router: Router,private titleService:Title) { }
  ishttpLoaded:boolean=false;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        this.slug = params.get('slug');
    });

    if(this.slug){
      this.getEvent()

    }else{
      this.router.navigate(['/home'])
      this.ishttpLoaded = true;
    }
    //this.getEvent()
  }

  getEvent(){
    this.eventService.getEvent(this.slug).subscribe(
      res_arr => {
        // this.eventService.event = res;
        if( !Array.isArray(res_arr) || res_arr.length == 0){
          this.router.navigate(['/home']);
          this.titleService.setTitle("Event not found - Opptim");
          return;
        }
        
        let res = res_arr[0]
        Object.keys(res).forEach((key) => (res[key] == null) &&  (res[key] = {}));
        this.event = <EventModel>res;
        //this.event.dates = res["dates"].map( d => <DateEvent>d );
        this.titleService.setTitle(this.event.title + " - Ooptim");
        this.ishttpLoaded = true;
      },
      err => {
        this.router.navigate(['/home']);
        this.titleService.setTitle("Server error - Ooptim");
        
        this.ishttpLoaded = true;
      }

    )

  }

}
