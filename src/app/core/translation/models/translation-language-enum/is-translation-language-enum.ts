import { any, equals, values } from 'ramda';

import { TranslationLanguageEnum } from './translation-language-enum';

export const isTranslationLanguageEnum = (value: unknown): value is TranslationLanguageEnum =>
	any(equals(value), values(TranslationLanguageEnum));
