import { Component, OnInit, Input } from '@angular/core';
import {EventModel} from '../../models/Event'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() event: EventModel;
  constructor() { }

  ngOnInit(): void {
  }

}
