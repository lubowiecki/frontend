import { MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';

import { environment } from '@environment';

export class CustomMissingTranslationHandler implements MissingTranslationHandler {
	handle(params: MissingTranslationHandlerParams): string {
		if (!environment.production) {
			// eslint-disable-next-line no-console
			console.error(`Missing translation for: ${params.key}`);
		}

		return '';
	}
}
