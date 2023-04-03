import { MissingTranslationHandler, TranslateLoader, TranslateModuleConfig } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Injector } from '@angular/core';

import { I18nMissingTranslationHandler } from './i18n-missing-translation-handler';
import { I18nTranslateLoader } from './i18n-translate-loader';

export const i18nModuleConfig: TranslateModuleConfig = {
	missingTranslationHandler: { provide: MissingTranslationHandler, useClass: I18nMissingTranslationHandler },
	loader: {
		provide: TranslateLoader,
		useClass: I18nTranslateLoader,
		deps: [HttpClient, Injector],
	},
	useDefaultLang: false,
};
