import { z } from 'zod';

import { TranslationLanguageEnum } from '../../models/translation-language-enum';

export const TranslationLanguagePropsSchema = z.object({
	lang: z.nativeEnum(TranslationLanguageEnum),
});

export type TranslationLanguageProps = z.infer<typeof TranslationLanguagePropsSchema>;
