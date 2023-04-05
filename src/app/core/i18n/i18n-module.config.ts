import { TranslateModuleConfig } from '@ngx-translate/core';

import { I18nMissingTranslationHandlerProvider } from '../ngx-i18n/i18n-missing-translation-handler';
import { I18nTranslateLoaderProvider } from './i18n-translate-loader';

export const i18nModuleConfig: TranslateModuleConfig = {
	missingTranslationHandler: I18nMissingTranslationHandlerProvider,
	loader: I18nTranslateLoaderProvider,
	useDefaultLang: false,
};
