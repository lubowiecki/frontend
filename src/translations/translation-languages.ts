export type TranslationLanguageEnum =
	| 'pl'
	| 'en'
	| 'en-US';

export const languages: TranslationLanguageEnum[] = ['pl','en','en-US'];

export const isTranslationLanguageEnum = (value: unknown): value is TranslationLanguageEnum =>
	languages.includes(value as TranslationLanguageEnum);
