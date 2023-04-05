export interface I18nBaseConfig<TranslationLanguageEnum> {
	languages: TranslationLanguageEnum[];
	logMissingTranslations?: boolean;
	localesToRegister: any[];
}
