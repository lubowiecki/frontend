import {
	Component, ChangeDetectionStrategy, OnInit, OnDestroy,
} from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Component({
	selector: 'app-websocket-page',
	templateUrl: './websocket-page.component.html',
	styleUrls: ['./websocket-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebsocketPageComponent implements OnInit, OnDestroy {
	socket: Socket;

	constructor() { }

	ngOnInit(): void {
		this.socket = io('ws://localhost:8080/v1', {
			auth: {
				token: 'myToken',
			},
		});
	}

	ngOnDestroy(): void {
		this.socket.close();
	}

	onUserCreate(): void {
		this.socket.emit('user:create', JSON.stringify({ update: `New data: ${Math.random()}` }));
	}

	onUserUpdate(): void {
		this.socket.emit('user:update', JSON.stringify({ update: `New data: ${Math.random()}` }));
	}
}
