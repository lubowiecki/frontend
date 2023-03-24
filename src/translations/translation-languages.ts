export type TranslationLanguageEnum =
	| 'pl'
	| 'en';

export const TranslationLanguageEnum = {
	Pl: 'pl' as TranslationLanguageEnum,
	En: 'en' as TranslationLanguageEnum,
};

export const isTranslationLanguageEnum = (value: unknown): value is TranslationLanguageEnum =>
	Object.values(TranslationLanguageEnum).includes(value as TranslationLanguageEnum);

export const languages: TranslationLanguageEnum[] = ['pl','en'];
