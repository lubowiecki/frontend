import { InjectionToken } from '@angular/core';

export interface I18nConfig {
	url?: string
}

export const I18N_CONFIG = new InjectionToken<I18nConfig>('i18n.config');
