import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import localePl from '@angular/common/locales/pl';

import { I18nLocaleProvider } from './i18n-localeId.provider';
import { i18nModuleConfig } from './i18n-module.config';
import { I18nService } from './i18n.service';

registerLocaleData(localePl);

@NgModule({
	imports: [
		TranslateModule.forRoot(i18nModuleConfig),
	],
	providers: [
		I18nLocaleProvider,
	],
})
export class I18nRootModule {
	constructor(private i18nService: I18nService) {
		this.i18nService.forRoot();
	}
}
