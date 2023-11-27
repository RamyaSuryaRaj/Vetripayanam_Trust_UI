import { Component } from '@angular/core';
import { EventService } from '../_services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
  providers:[ EventService ]
})
export class EventComponent {
  constructor( private eventService:EventService){}
  events:any;

  ngOnInit(){
    this.eventService.getEvents()
    .subscribe((data:any)=>{
      this.events = data.data;
    },(error)=>{
    })
  }

}
