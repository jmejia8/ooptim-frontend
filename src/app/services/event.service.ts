import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventModel } from '../models/Event'

@Injectable({
  providedIn: 'root'
})
export class EventService {

  URL_API = 'https://ooptim.herokuapp.com'
  public event: EventModel;
  constructor(private http : HttpClient) { }

  getEvent(slug: string){
    return this.http.get<EventModel>(this.URL_API + '/events?slug=' + slug);
  }
}
