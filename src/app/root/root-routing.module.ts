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

const routes: Routes = [
	{
		path: routeRoot.path,
		loadChildren: () => import('@pages/profile-page/profile-page.module').then((m) => m.ProfilePageModule),
	},
	{
		path: routePanel.path,
		loadChildren: () => import('@pages/panel-page/panel-page.module').then((m) => m.PanelPageModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class RootRoutingModule { }
