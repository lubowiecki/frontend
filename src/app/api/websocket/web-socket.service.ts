import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';

import { WebSocketEventType } from '../dtos/models';

type WebSocketEventsMap = {
	[event in WebSocketEventType]: (...args: any[]) => void
}

@Injectable({
	providedIn: 'root',
})
export class WebSocketService {
	#socket: Socket<WebSocketEventsMap>;

	constructor() { }

	open(token: string): void {
		this.#socket = io('ws://localhost:8080/v1', {
			auth: {
				token,
			},
		});
	}

	close(): void {
		this.#socket = this.#socket.close();
	}

	emitUserCreate(data: string) {
		this.#socket.emit(WebSocketEventType.UserCreate, data);
	}

	emitUserUpdate(data: string) {
		this.#socket.emit(WebSocketEventType.UserUpdate, data);
	}
}
