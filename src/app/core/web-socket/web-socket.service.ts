import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { BehaviorSubject, Observable } from 'rxjs';
import { Maybe } from '@lubowiecki/ts-utility';

import { WebSocketEventType } from '../../api/dtos/models';

type WebSocketEventsMap = {
	[event in WebSocketEventType]: (...args: any[]) => void
}

@Injectable({
	providedIn: 'root',
})
export class WebSocketService {
	#socket$: BehaviorSubject<Maybe<Socket<WebSocketEventsMap>>> = new BehaviorSubject<Maybe<Socket<WebSocketEventsMap>>>(null);

	constructor() { }

	open(token: string): void {
		this.#socket$.next(io('ws://localhost:8080/v1', {
			auth: {
				token,
			},
		}));
	}

	close(): void {
		const socket = this.#socket$.getValue();

		if (!socket) return;

		socket.close();
		this.#socket$.next(null);
	}

	getSocket$(): Observable<Maybe<Socket<WebSocketEventsMap>>> {
		return this.#socket$.asObservable();
	}

	getSocketValue(): Maybe<Socket<WebSocketEventsMap>> {
		return this.#socket$.getValue();
	}
}
