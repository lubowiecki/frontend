import { HttpClient } from '@angular/common/http';
import { MissingTranslationHandler, TranslateLoader, TranslateModuleConfig } from '@ngx-translate/core';

import { CustomMissingTranslationHandler } from './classes/custom-missing-translation-handler';
import { LazyTranslateLoader } from './classes/lazy-translate-loader';

export const i18nModuleConfig: TranslateModuleConfig = {
	missingTranslationHandler: { provide: MissingTranslationHandler, useClass: CustomMissingTranslationHandler },
	loader: {
		provide: TranslateLoader,
		useClass: LazyTranslateLoader,
		deps: [HttpClient],
	},
	useDefaultLang: false,
};
