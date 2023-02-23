import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslationModule, LanguageSwitcherContainerComponent } from '@core/translation';

import { RootComponent } from './root.component';
import { RootRoutingModule } from './root-routing.module';

@NgModule({
	declarations: [
		RootComponent,
	],
	exports: [
		RootComponent,
	],
	imports: [
		CommonModule,
		RootRoutingModule,
		TranslationModule,
		LanguageSwitcherContainerComponent,
	],
})
export class RootModule { }
