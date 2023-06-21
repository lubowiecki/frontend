import { Inject, Injectable, Provider } from '@angular/core';
import {
	MissingTranslationHandler,
	MissingTranslationHandlerParams,
} from '@opi_pib/ngx-i18n';

import { I18N_CONFIG, I18nConfig } from './i18n.config';

@Injectable()
class I18nMissingTranslationHandler implements MissingTranslationHandler {
	constructor(@Inject(I18N_CONFIG) private config: I18nConfig) {}

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
