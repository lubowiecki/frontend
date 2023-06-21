import {
	TranslationLanguageProps,
	TranslationLanguagePropsSchema,
} from './translation-language-props';

export const isTranslationLanguageProps = (
	obj: unknown
): obj is TranslationLanguageProps =>
	TranslationLanguagePropsSchema.safeParse(obj).success;
