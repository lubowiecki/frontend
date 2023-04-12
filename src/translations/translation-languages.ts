export type TranslationLanguageEnum =
	| 'pl'
	| 'en'
	| 'en-US'
	| 'pl-PL';

export const languages: TranslationLanguageEnum[] = ['pl','en','en-US','pl-PL'];

export const isTranslationLanguageEnum = (value: unknown): value is TranslationLanguageEnum =>
	languages.includes(value as TranslationLanguageEnum);
