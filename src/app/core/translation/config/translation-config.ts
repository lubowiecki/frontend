import { InjectionToken } from '@angular/core';

import { TranslationConfig } from '../models/translation-config';
import { TranslationLanguageEnum } from '../models/translation-language-enum';

export const TRANSLATION_CONFIG = new InjectionToken<TranslationConfig>('translation.config');

export const translationConfig: TranslationConfig = {
	availableLanguages: [TranslationLanguageEnum.Pl, TranslationLanguageEnum.En],
	defaultLanguage: TranslationLanguageEnum.Pl,
};
