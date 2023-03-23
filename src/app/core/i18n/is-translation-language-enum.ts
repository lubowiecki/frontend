import { any, equals, values } from 'ramda';

import { TranslationLanguageEnum } from '@translations/translation-languages';

export const isTranslationLanguageEnum = (value: unknown): value is TranslationLanguageEnum =>
	any(equals(value), values(TranslationLanguageEnum));
