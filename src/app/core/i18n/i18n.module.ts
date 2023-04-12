import { NgModule } from '@angular/core';
import { TranslateModule } from '@opi_pib/ngx-i18n';

import { i18nModuleConfig } from './i18n-module.config';
import { i18nPipes } from './pipes';

@NgModule({
	imports: [
		TranslateModule.forChild(i18nModuleConfig),
		...i18nPipes,
	],
	exports: i18nPipes,
})
export class I18nModule { }
