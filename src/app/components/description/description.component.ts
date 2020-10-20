import { Component, OnInit, Input } from '@angular/core';
import {EventModel} from '../../models/Event'

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  @Input() event: EventModel;
  constructor() { }

  ngOnInit(): void {
  }

}
