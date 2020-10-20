import { Component, OnInit, Input } from '@angular/core';
import {EventModel} from '../../models/Event'

@Component({
  selector: 'app-committee',
  templateUrl: './committee.component.html',
  styleUrls: ['./committee.component.css']
})
export class CommitteeComponent implements OnInit {
  @Input() event: EventModel;
  constructor() { }

  ngOnInit(): void {
  }

}
