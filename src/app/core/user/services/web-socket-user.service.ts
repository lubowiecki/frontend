import { Injectable } from '@angular/core';

import { WebSocketEventType } from '@api/dtos/models';
import { WebSocketService } from '@core/web-socket/web-socket.service';

import { User } from '../value-objects/user';

@Injectable({
	providedIn: 'root',
})
export class WebSocketUserService {
	constructor(private webSocketService: WebSocketService) {
		this.webSocketService.getSocket$().subscribe((socket) => {
			if (socket) {
				socket.on(WebSocketEventType.UserCreated, (x: string) => console.log(User.fromString(x)));
			}
		});
	}

	emitUserCreate(data: string) {
		this.webSocketService.getSocketValue()?.emit(WebSocketEventType.UserCreate, data);
	}

	emitUserUpdate(data: string) {
		this.webSocketService.getSocketValue()?.emit(WebSocketEventType.UserUpdate, data);
	}
}
