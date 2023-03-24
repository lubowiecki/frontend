import { LOCALE_ID, Provider } from '@angular/core';

import { I18nLocaleId } from './i18n-localeId';
import { I18nService } from './i18n.service';

export function myStringFactory(service: I18nService) {
	return service.getCurrentLanguage().toDto;
}

export const I18nLocaleProvider: Provider = {
	provide: LOCALE_ID,
	useClass: I18nLocaleId,
	deps: [I18nService],
};
