import { Component, OnInit, Input } from '@angular/core';
import {EventModel} from '../../models/Event'

@Component({
  selector: 'app-submissiondetails',
  templateUrl: './submissiondetails.component.html',
  styleUrls: ['./submissiondetails.component.css']
})
export class SubmissiondetailsComponent implements OnInit {

  @Input() event: EventModel;
  constructor() { }

  ngOnInit(): void {
  }

}
