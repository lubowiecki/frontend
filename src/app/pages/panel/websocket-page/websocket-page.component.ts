import {
	Component, ChangeDetectionStrategy, OnInit, OnDestroy,
} from '@angular/core';

import { WebSocketService } from '@api/web-socket/web-socket.service';
import { WebSocketUserService } from '@core/user/services/web-socket-user.service';

@Component({
	selector: 'app-websocket-page',
	templateUrl: './websocket-page.component.html',
	styleUrls: ['./websocket-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebsocketPageComponent implements OnInit, OnDestroy {
	constructor(
		private webSocketService: WebSocketService,
		private webSocketUserService: WebSocketUserService,
	) { }

	ngOnInit(): void {
		this.webSocketService.open('myToken');
	}

	ngOnDestroy(): void {
		this.webSocketService.close();
	}

	onUserCreate(): void {
		this.webSocketUserService.emitUserCreate(JSON.stringify({ update: `New data: ${Math.random()}` }));
	}

	onUserUpdate(): void {
		this.webSocketUserService.emitUserUpdate(JSON.stringify({ update: `New data: ${Math.random()}` }));
	}
}
