import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DatesPageComponent } from './dates-page.component';

const routes: Routes = [
	{
		path: '',
		component: DatesPageComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export default class DatesPageRoutingModule {}
