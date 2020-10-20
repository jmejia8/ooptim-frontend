import { Component, OnInit, Input } from '@angular/core';
import {EventComponent} from '../event/event.component'

@Component({
  selector: 'app-submissiondetails',
  templateUrl: './submissiondetails.component.html',
  styleUrls: ['./submissiondetails.component.css']
})
export class SubmissiondetailsComponent implements OnInit {

  @Input() event: EventComponent;
  constructor() { }

  ngOnInit(): void {
  }

}
