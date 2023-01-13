import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Paths } from '@core/navigation/models/paths';
import { TypedRoutes } from '@core/navigation/models/typed-routes';

import { PanelPageComponent } from './panel-page.component';

const routeUser: TypedRoutes[Paths.User] = {
	path: 'user',
};

const routeWebsocket: TypedRoutes[Paths.Websocket] = {
	path: 'websocket',
};

const routeEventsource: TypedRoutes[Paths.Eventsource] = {
	path: 'eventsource',
};

const routes: Routes = [
	{
		path: '',
		component: PanelPageComponent,
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: routeUser.path,
			},
			{
				path: routeUser.path,
				loadChildren: () => import('@pages/panel/user-page/user-page.module').then((m) => m.UserPageModule),
			},
			{
				path: routeWebsocket.path,
				loadChildren: () => import('@pages/panel/websocket-page/websocket-page.module').then((m) => m.WebsocketPageModule),
			},
			{
				path: routeEventsource.path,
				loadChildren: () => import('@pages/panel/eventsource-page/eventsource-page.module').then((m) => m.EventsourcePageModule),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PanelPageRoutingModule { }
