import { Component, OnInit, Input } from '@angular/core';
import {EventComponent} from '../event/event.component'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() event : EventComponent;
  constructor() { }

  ngOnInit(): void {
  }

}
