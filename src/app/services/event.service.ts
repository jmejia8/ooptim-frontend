import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  URL_API = 'http://localhost:1337/events/1'
  public event;
  constructor(private http : HttpClient) { }

  getEvent(){
    return this.http.get(this.URL_API);
  }
}
