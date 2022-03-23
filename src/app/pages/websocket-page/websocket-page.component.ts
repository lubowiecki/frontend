import {
	Component, ChangeDetectionStrategy, OnInit, OnDestroy,
} from '@angular/core';
import { WebSocketService } from 'src/app/api/websocket/web-socket.service';

@Component({
	selector: 'app-websocket-page',
	templateUrl: './websocket-page.component.html',
	styleUrls: ['./websocket-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebsocketPageComponent implements OnInit, OnDestroy {
	constructor(private webSocketService: WebSocketService) { }

	ngOnInit(): void {
		this.webSocketService.open('myToken');
	}

	ngOnDestroy(): void {
		this.webSocketService.close();
	}

	onUserCreate(): void {
		this.webSocketService.emitUserCreate(JSON.stringify({ update: `New data: ${Math.random()}` }));
	}

	onUserUpdate(): void {
		this.webSocketService.emitUserUpdate(JSON.stringify({ update: `New data: ${Math.random()}` }));
	}
}
