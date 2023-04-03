import { Inject, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import pl from '@angular/common/locales/pl';

import { environment } from '@environment';
import { languages } from '@translations/translation-languages';

import { I18nLocaleIdProvider } from './i18n-localeId.provider';
import { i18nModuleConfig } from './i18n-module.config';
import { I18nService } from './i18n.service';
import { I18N_CONFIG, I18nConfig } from './i18n.config';

function registerLocales(locales: any[] = []) {
	locales.forEach((locale) => registerLocaleData(locale));
}

@NgModule({
	imports: [
		TranslateModule.forRoot(i18nModuleConfig),
	],
	providers: [
		I18nLocaleIdProvider,
		{
			provide: I18N_CONFIG,
			useValue: {
				logMissingTranslations: !environment.production,
				languages,
				localesToRegister: [pl],
				pathToTranslationsFolder: './translations',
			},
		},
	],
})
export class I18nRootModule {
	constructor(
		@Inject(I18N_CONFIG) private config: I18nConfig,
		private i18nService: I18nService,
	) {
		registerLocales(this.config.localesToRegister);
		this.i18nService.forRoot();
	}
}
