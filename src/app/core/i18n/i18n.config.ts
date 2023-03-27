import { InjectionToken } from '@angular/core';

export interface I18nConfig {
	logMissingTranslations?: boolean
}

export const I18N_CONFIG = new InjectionToken<I18nConfig>('i18n.config');
