import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventsourcePageComponent } from './eventsource-page.component';

const routes: Routes = [
	{
		path: '',
		component: EventsourcePageComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class EventsourcePageRoutingModule { }
