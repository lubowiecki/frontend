import { TranslationKey } from '@translations/translation-key';
import { t } from '@translations/translation-marker';

import { TranslationLanguageEnum } from '../../models/translation-language-enum';

type TranslationLanguageMap = {
	[key in TranslationLanguageEnum]: {
		translationKey: TranslationKey;
	};
};

export const translationLanguageMap: TranslationLanguageMap = {
	[TranslationLanguageEnum.Pl]: {
		translationKey: t('languageSwitcher.lang.pl'),
	},

	[TranslationLanguageEnum.En]: {
		translationKey: t('languageSwitcher.lang.en'),
	},
};
