import { Component, OnInit, Input } from '@angular/core';
import {EventModel} from '../../models/Event'

@Component({
  selector: 'app-organizers',
  templateUrl: './organizers.component.html',
  styleUrls: ['./organizers.component.css']
})
export class OrganizersComponent implements OnInit {

  @Input() event: EventModel;
  constructor() { }

  ngOnInit(): void {
  }

}
