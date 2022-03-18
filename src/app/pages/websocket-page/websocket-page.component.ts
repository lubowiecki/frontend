import {
	Component, ChangeDetectionStrategy, OnInit, OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';

@Component({
	selector: 'app-websocket-page',
	templateUrl: './websocket-page.component.html',
	styleUrls: ['./websocket-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebsocketPageComponent implements OnInit, OnDestroy {
	#websocket$ = webSocket({
		url: 'ws://localhost:8080/v1',
	});

	#subscriptions: Subscription = new Subscription();

	constructor() { }

	ngOnInit(): void {
		this.#subscriptions.add(
			this.#websocket$.subscribe({
				next: console.log,
				error: console.log,
				complete: () => console.log('complete'),
			}),
		);
	}

	ngOnDestroy(): void {
		this.#subscriptions.unsubscribe();
	}

	onSend(): void {
		this.#websocket$.next(JSON.stringify({ update: `New data: ${Math.random()}` }));
	}
}
