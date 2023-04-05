import { I18nServiceBase } from './i18n.service.base';
import { TranslationLanguageBase } from './translation-language-base';

export class I18nLocaleIdBase<TranslationKey extends string, TranslationLanguageEnum extends string> extends String {
	constructor(
		protected i18nService: I18nServiceBase<
			TranslationKey,
			TranslationLanguageEnum,
			TranslationLanguageBase<TranslationLanguageEnum, TranslationKey>
		>,
	) {
		super();
	}

	override toString(): string {
		return this.i18nService.getCurrentLanguage().toDto();
	}
}
