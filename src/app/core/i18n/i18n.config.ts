import { InjectionToken } from '@angular/core';

import { TranslationLanguageEnum } from '@translations/translation-languages';

export interface I18nConfig {
	defaultLanguage: TranslationLanguageEnum;
}

export const I18N_CONFIG = new InjectionToken<I18nConfig>('i18n.config');
