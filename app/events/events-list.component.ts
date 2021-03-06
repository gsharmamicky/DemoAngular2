import {Component,OnInit} from '@angular/core'
import {EventService} from './Shared/event.Service'
import {ToastrService} from '../Common/toastr.service'


@Component({


    selector:'events-list',
template:    `<div>
        <h1>
        Upcoming Angular Event
        </h1>
        <hr/>
        <div class="row">
        <div *ngFor ="let event of events" class="col-md-5">
         <event-thumbnail (click)="handleClickThumnail(event.name)"  [event]="event"></event-thumbnail>
        </div>
        </div>

    </div> 
   `
   
    
    
    
})
export class EventListComponent implements OnInit
{
    events:any[]

    constructor(private eventService: EventService,private toastr :ToastrService)
    {
    }

    ngOnInit(){
this.events =  this.eventService.getEvents();
    }


    handleClickThumnail(eventName)
    {
this.toastr.success(eventName);

    }
}

