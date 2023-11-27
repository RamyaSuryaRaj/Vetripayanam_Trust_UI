import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private http: HttpClient) { }
  private base_url: string = "http://localhost:3000/api/event/";

  getEvents(){
    return this.http.get(this.base_url + 'event');
  }
  postEvents(event:any){
    return this.http.post(this.base_url + 'event',event);
  }
  putEvents(event:any){
    return this.http.put(this.base_url + 'event',event);
  }
  deleteEvents(event:any){
    return this.http.delete(this.base_url + 'event',event);
  }

}
