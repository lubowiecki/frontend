import { isObject } from '@lubowiecki/ts-utility';

import { isTranslationLanguageEnum } from '../../models/translation-language-enum';
import { TranslationLanguageProps } from './translation-language-props';

export const isTranslationLanguageProps = (obj: unknown): obj is TranslationLanguageProps =>
	isObject(obj) &&
	isTranslationLanguageEnum(obj.lang);
