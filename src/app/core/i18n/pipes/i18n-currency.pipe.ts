import {
	Inject, LOCALE_ID, Pipe, PipeTransform,
} from '@angular/core';

import { I18nCurrencyPipeBase } from '@core/ngx-i18n/pipes/i18n-currency-base.pipe';
import { TranslationKey } from '@translations/translation-key';
import { TranslationLanguageEnum } from '@translations/translation-languages';

import { I18nLocaleId } from '../i18n-localeId';

@Pipe({
	name: 'i18nCurrency',
	standalone: true,
	pure: false,
})
export class I18nCurrencyPipe extends I18nCurrencyPipeBase<TranslationKey, TranslationLanguageEnum> implements PipeTransform {
	constructor(@Inject(LOCALE_ID) protected override localeId: I18nLocaleId) {
		super(localeId);
	}
}
