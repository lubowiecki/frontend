import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageSwitcherContainerModule } from 'src/app/core/translation/components/language-switcher-container/language-switcher-container.module';
import { TranslationModule } from 'src/app/core/translation/translation.module';

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
		LanguageSwitcherContainerModule,
		TranslationModule,
	],
})
export class RootModule { }
