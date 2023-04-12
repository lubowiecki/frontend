import { TranslateModuleConfig } from '@opi_pib/ngx-i18n';

import { I18nMissingTranslationHandlerProvider } from './i18n-missing-translation-handler';
import { I18nTranslateLoaderProvider } from './i18n-translate-loader';

export const i18nModuleConfig: TranslateModuleConfig = {
	missingTranslationHandler: I18nMissingTranslationHandlerProvider,
	loader: I18nTranslateLoaderProvider,
	useDefaultLang: false,
};
