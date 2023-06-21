import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsourcePageComponent } from './eventsource-page.component';
import { EventsourcePageRoutingModule } from './eventsource-page-routing.module';

@NgModule({
	declarations: [EventsourcePageComponent],
	imports: [CommonModule, EventsourcePageRoutingModule],
	exports: [EventsourcePageComponent],
})
export class EventsourcePageModule {}
