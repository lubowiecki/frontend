export interface I18nConfigBase<T> {
	languages: T[];
	logMissingTranslations?: boolean;
	localesToRegister: any[];
	pathToTranslationsFolder: string;
}
