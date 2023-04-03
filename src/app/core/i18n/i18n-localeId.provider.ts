import { LOCALE_ID, Provider } from '@angular/core';

import { I18nLocaleId } from './i18n-localeId';
import { I18nService } from './i18n.service';

export const I18nLocaleIdProvider: Provider = {
	provide: LOCALE_ID,
	useClass: I18nLocaleId,
	deps: [I18nService],
};
