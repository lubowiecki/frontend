import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanguageSwitcherContainerComponent } from '@core/i18n/components/language-switcher-container/language-switcher-container.component';
import { I18nModule } from '@core/i18n';

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
		LanguageSwitcherContainerComponent,
		I18nModule,
	],
})
export class RootModule { }
