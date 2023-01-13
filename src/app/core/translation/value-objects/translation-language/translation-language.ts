import { always, ValueObject } from '@opi_pib/ts-utility';

import { TranslationLanguageEnum } from '@core/translation/models/translation-language-enum';
import { TranslationKey } from '@translations/translation-key';

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

	static createPl(): TranslationLanguage {
		return this.create({ lang: TranslationLanguageEnum.Pl });
	}

	static createEn(): TranslationLanguage {
		return this.create({ lang: TranslationLanguageEnum.En });
	}

	toDto(): TranslationLanguageEnum {
		return this.props.lang;
	}

	getTranslationKey(): TranslationKey {
		return translationLanguageMap[this.toDto()].translationKey;
	}

	getLanguageToSwitch(): TranslationLanguage {
		return this.equals(TranslationLanguage.createPl()) ? TranslationLanguage.createEn() : TranslationLanguage.createPl();
	}
}
