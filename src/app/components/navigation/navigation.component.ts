import { Component, OnInit, Input } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import {EventModel} from '../../models/Event'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() event: EventModel;

  constructor(private viewportScroller: ViewportScroller) { }
  ngOnInit(): void {
  }

  
  public onClick(elementId: string): void { 
      this.viewportScroller.scrollToAnchor(elementId);
  }
}
