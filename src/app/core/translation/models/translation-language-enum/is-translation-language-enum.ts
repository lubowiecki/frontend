import * as R from 'ramda';

import { TranslationLanguageEnum } from './translation-language-enum';

export const isTranslationLanguageEnum = (value: unknown): value is TranslationLanguageEnum =>
	R.any(R.equals(value), R.values(TranslationLanguageEnum));
