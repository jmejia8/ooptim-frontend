import { Component, OnInit,Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-spinner-component',
  templateUrl: './spinner-component.component.html',
  styleUrls: ['./spinner-component.component.css']
})
export class SpinnerComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() loading:boolean=false;
  @Input() httploading:boolean=false;
  
  ngOnChanges(changes:SimpleChange){
    console.log(changes); //logging the changes in @Input()
  }
}
