import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('@pages/profile-page/profile-page.module').then((m) => m.ProfilePageModule),
	},
	{
		path: 'user',
		loadChildren: () => import('@pages/user-page/user-page.module').then((m) => m.UserPageModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class RootRoutingModule { }
