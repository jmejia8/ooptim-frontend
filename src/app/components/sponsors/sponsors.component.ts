import { Component, OnInit, Input } from '@angular/core';
import {EventComponent} from '../event/event.component'

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {

  @Input() event: EventComponent;
  constructor() { }

  ngOnInit(): void {
  }

}
