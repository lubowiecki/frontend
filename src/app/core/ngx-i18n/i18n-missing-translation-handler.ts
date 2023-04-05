import { MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';
import { Inject, Injectable, Provider } from '@angular/core';

import { I18N_CONFIG } from '../i18n/i18n.config';
import { I18nBaseConfig } from './i18n-base.config';

@Injectable()
class I18nMissingTranslationHandler implements MissingTranslationHandler {
	constructor(@Inject(I18N_CONFIG) private config: I18nBaseConfig<any>) {}

	handle(params: MissingTranslationHandlerParams): string {
		if (this.config.logMissingTranslations) {
			// eslint-disable-next-line no-console
			console.error(`Missing translation for: ${params.key}`);
		}

		return '';
	}
}

export const I18nMissingTranslationHandlerProvider: Provider = {
	provide: MissingTranslationHandler,
	useClass: I18nMissingTranslationHandler,
};
