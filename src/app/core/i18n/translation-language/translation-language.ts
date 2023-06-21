import { always, ValueObject } from '@opi_pib/ts-utility';
import { TranslationLanguageBase } from '@opi_pib/ngx-i18n';

import { TranslationKey } from '@translations/translation-key';
import { TranslationLanguageEnum } from '@translations/translation-languages';

import { TranslationLanguageProps } from './translation-language-props';
import { isTranslationLanguageProps } from './is-translation-language-props';
import { translationLanguageMap } from './translation-language-map';

export class TranslationLanguage
	extends ValueObject<TranslationLanguageProps>
	implements TranslationLanguageBase<TranslationLanguageEnum, TranslationKey>
{
	constructor(protected override readonly props: TranslationLanguageProps) {
		super(props);
	}

	static create(props: TranslationLanguageProps): TranslationLanguage {
		always(isTranslationLanguageProps(props), 'z4gzlad6');

		return new TranslationLanguage(props);
	}

	static fromDto(lang: TranslationLanguageEnum): TranslationLanguage {
		return this.create({ lang });
	}

	toDto(): TranslationLanguageEnum {
		return this.props.lang;
	}

	getTranslationKey(): TranslationKey {
		return translationLanguageMap[this.toDto()].translationKey;
	}
}
