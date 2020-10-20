import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventModel } from '../models/Event'

@Injectable({
  providedIn: 'root'
})
export class EventService {

  URL_API = 'http://localhost:1337/events/1'
  public event: EventModel;
  constructor(private http : HttpClient) { }

  getEvent(){
    return this.http.get<EventModel>(this.URL_API);
  }
}
