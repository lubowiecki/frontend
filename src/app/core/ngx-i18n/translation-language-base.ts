export abstract class TranslationLanguageBase<TranslationLanguageEnum extends string, TranslationKey extends string> {
	abstract toDto(): TranslationLanguageEnum;

	abstract getTranslationKey(): TranslationKey;
}
