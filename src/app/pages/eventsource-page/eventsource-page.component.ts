import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-eventsource-page',
	templateUrl: './eventsource-page.component.html',
	styleUrls: ['./eventsource-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsourcePageComponent {
	constructor() { }
}
