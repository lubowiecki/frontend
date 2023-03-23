import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { i18nModuleConfig } from './i18n-module.config';
import { I18nPipe } from './i18n.pipe';

@NgModule({
	imports: [
		TranslateModule.forChild(i18nModuleConfig), I18nPipe,
	],
	exports: [
		I18nPipe,
	],
})
export class I18nModule { }
