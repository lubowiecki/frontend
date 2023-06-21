import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { BehaviorSubject, Observable } from 'rxjs';
import { Maybe } from '@opi_pib/ts-utility';

import { environment } from '@environment';

import { WebSocketEventType } from '../rest/models';

type WebSocketEventsMap = {
	[event in WebSocketEventType]: (...args: string[]) => void;
};

@Injectable({
	providedIn: 'root',
})
export class WebSocketService {
	#socket$: BehaviorSubject<Maybe<Socket<WebSocketEventsMap>>> =
		new BehaviorSubject<Maybe<Socket<WebSocketEventsMap>>>(null);

	open(token: string): void {
		this.#socket$.next(
			io(environment.webSocketUri, {
				auth: {
					token,
				},
			})
		);
	}

	close(): void {
		const socket = this.#socket$.getValue();

		if (!socket) return;

		socket.close();
		this.#socket$.next(null);
	}

	socket$(): Observable<Maybe<Socket<WebSocketEventsMap>>> {
		return this.#socket$.asObservable();
	}

	value(): Maybe<Socket<WebSocketEventsMap>> {
		return this.#socket$.getValue();
	}
}
