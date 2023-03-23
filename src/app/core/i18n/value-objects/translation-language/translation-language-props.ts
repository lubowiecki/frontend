import { z } from 'zod';

import { TranslationLanguageEnum } from '@translations/translation-languages';

export const TranslationLanguagePropsSchema = z.object({
	lang: z.nativeEnum(TranslationLanguageEnum),
});

export type TranslationLanguageProps = z.infer<typeof TranslationLanguagePropsSchema>;
