import { MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';
import { Inject, Injectable } from '@angular/core';

import { I18N_CONFIG, I18nConfig } from './i18n.config';

@Injectable()
export class I18nMissingTranslationHandler implements MissingTranslationHandler {
	constructor(@Inject(I18N_CONFIG) private config: I18nConfig) {}

	handle(params: MissingTranslationHandlerParams): string {
		if (this.config.logMissingTranslations) {
			// eslint-disable-next-line no-console
			console.error(`Missing translation for: ${params.key}`);
		}

		return '';
	}
}
