import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {EventsAppcomponent} from './events.app.component'
import {EventThumbnailComponent} from './events/events-thumbnail.component'
import {EventListComponent} from './events/events-list.component'
import {navBarComponent} from './Nav/navbar.component'
import {EventService} from './events/Shared/event.Service'
import {ToastrService} from './Common/toastr.service'

@NgModule({

imports:[BrowserModule],

declarations:[EventsAppcomponent,
EventListComponent,
EventThumbnailComponent,
navBarComponent
],
providers:[EventService,ToastrService],
bootstrap:[EventsAppcomponent]



})

export class AppModule{}