export type TranslationLanguageEnum =
	| 'en-US'
	| 'pl-PL';

export const languages: TranslationLanguageEnum[] = ['en-US','pl-PL'];

export const isTranslationLanguageEnum = (value: unknown): value is TranslationLanguageEnum =>
	languages.includes(value as TranslationLanguageEnum);
