import { TranslationLanguageEnum } from './translation-language-enum';

export interface TranslationConfig {
	availableLanguages: TranslationLanguageEnum[];
	defaultLanguage: TranslationLanguageEnum;
}
