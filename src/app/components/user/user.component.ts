import { Component, OnInit, Input } from '@angular/core';
import {EventComponent} from '../event/event.component'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() event: EventComponent;
  constructor() { }

  ngOnInit(): void {
  }

}
