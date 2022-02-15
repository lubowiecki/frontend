import { always, ValueObject } from '@lubowiecki/ts-utility';

import { TranslationKey } from '@translations/translation-key';

import { TranslationLanguageProps } from './translation-language-props';
import { isTranslationLanguageProps } from './is-translation-language-props';
import { translationLanguageMap } from './translation-language-map';
import { TranslationLanguageEnum } from '../../models/translation-language-enum';

export class TranslationLanguage extends ValueObject<TranslationLanguageProps> {
	constructor(protected readonly props: TranslationLanguageProps) {
		super(props);
	}

	static create(props: TranslationLanguageProps): TranslationLanguage {
		always(isTranslationLanguageProps(props), 'fryb3t71');

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
