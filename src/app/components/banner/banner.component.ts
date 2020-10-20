import { Component, OnInit, Input } from '@angular/core';
import {EventModel} from '../../models/Event'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Input() event: EventModel;
  constructor() { }

  ngOnInit(): void {
  }

}
