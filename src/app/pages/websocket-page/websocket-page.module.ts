import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsocketPageComponent } from './websocket-page.component';
import { WebsocketPageRoutingModule } from './websocket-page-routing.module';

@NgModule({
	declarations: [
		WebsocketPageComponent,
	],
	imports: [
		CommonModule,
		WebsocketPageRoutingModule,
	],
	exports: [
		WebsocketPageComponent,
	],
})
export class WebsocketPageModule { }
