import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WebsocketPageComponent } from './websocket-page.component';

const routes: Routes = [
	{
		path: '',
		component: WebsocketPageComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class WebsocketPageRoutingModule { }
