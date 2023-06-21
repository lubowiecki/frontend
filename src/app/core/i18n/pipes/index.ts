import { I18nCurrencyPipe } from './i18n-currency.pipe';
import { I18nDatePipe } from './i18n-date.pipe';
import { I18nTranslatePipe } from './i18n-translate.pipe';
import { I18nPluralPipe } from './i18n-translate-plural.pipe';

export const i18nPipes = [
	I18nTranslatePipe,
	I18nDatePipe,
	I18nCurrencyPipe,
	I18nPluralPipe,
];
