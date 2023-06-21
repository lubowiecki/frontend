import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Paths } from '@core/navigation/models/paths';
import { TypedRoutes } from '@core/navigation/models/typed-routes';

const routeRoot: TypedRoutes[Paths.Root] = {
	path: '',
};

const routePanel: TypedRoutes[Paths.Panel] = {
	path: 'panel',
};

const routeDates: TypedRoutes[Paths.Dates] = {
	path: 'dates',
};

const routes: Routes = [
	{
		path: routeRoot.path,
		loadChildren: () => import('@pages/profile-page/profile-page.module'),
	},
	{
		path: routeDates.path,
		loadChildren: () =>
			import('@pages/dates-page/dates-page-routing.module'),
	},
	{
		path: routePanel.path,
		loadChildren: () => import('@pages/panel/panel-page/panel-page.module'),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class RootRoutingModule {}
