import { always, ValueObject } from '@opi_pib/ts-utility';

import { TranslationKey } from '@translations/translation-key';
import { TranslationLanguageEnum } from '@translations/translation-languages';

import { TranslationLanguageProps } from './translation-language-props';
import { isTranslationLanguageProps } from './is-translation-language-props';
import { translationLanguageMap } from './translation-language-map';

export class TranslationLanguage extends ValueObject<TranslationLanguageProps> {
	constructor(protected override readonly props: TranslationLanguageProps) {
		super(props);
	}

	static create(props: TranslationLanguageProps): TranslationLanguage {
		always(isTranslationLanguageProps(props), 'z4gzlad6');

		return new TranslationLanguage(props);
	}

	toDto(): TranslationLanguageEnum {
		return this.props.lang;
	}

	getTranslationKey(): TranslationKey {
		return translationLanguageMap[this.toDto()].translationKey;
	}

	getLanguageToSelect(): TranslationLanguage {
		const pl = TranslationLanguage.create({ lang: TranslationLanguageEnum.Pl });
		const en = TranslationLanguage.create({ lang: TranslationLanguageEnum.En });

		return this.equals(pl) ? en : pl;
	}
}
