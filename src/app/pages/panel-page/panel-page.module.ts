import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslationModule } from '@core/translation/translation.module';

import { PanelPageRoutingModule } from './panel-page-routing.module';
import { PanelPageComponent } from './panel-page.component';

@NgModule({
	declarations: [
		PanelPageComponent,
	],
	imports: [
		CommonModule,
		PanelPageRoutingModule,
		TranslationModule,
	],
	exports: [
		PanelPageComponent,
	],
})
export class PanelPageModule { }
