import { TranslationKey } from '@translations/translation-key';
import { TranslationLanguageEnum } from '@translations/translation-languages';
import { t } from '@translations/translation-marker';

type TranslationLanguageMap = {
	[key in TranslationLanguageEnum]: {
		translationKey: TranslationKey;
	};
};

export const translationLanguageMap: TranslationLanguageMap = {
	'en-US': {
		translationKey: t('languageSwitcher.lang.en-us'),
	},
	'pl-PL': {
		translationKey: t('languageSwitcher.lang.pl-pl'),
	},
};
