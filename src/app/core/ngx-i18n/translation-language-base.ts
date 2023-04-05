export abstract class TranslationLanguageBase<TranslationLanguageEnum, TranslationKey> {
	abstract toDto(): TranslationLanguageEnum;

	abstract getTranslationKey(): TranslationKey;
}
