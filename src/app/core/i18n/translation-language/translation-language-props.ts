import { z } from 'zod';

import {
	TranslationLanguageEnum,
	isTranslationLanguageEnum,
} from '@translations/translation-languages';

export const TranslationLanguagePropsSchema = z.object({
	lang: z.custom<TranslationLanguageEnum>((value) =>
		isTranslationLanguageEnum(value)
	),
});

export type TranslationLanguageProps = z.infer<
	typeof TranslationLanguagePropsSchema
>;
