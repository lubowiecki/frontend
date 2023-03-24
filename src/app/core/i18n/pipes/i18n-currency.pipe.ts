import { CurrencyPipe } from '@angular/common';
import {
	Inject, LOCALE_ID, Pipe, PipeTransform,
} from '@angular/core';

import { I18nLocaleId } from '../i18n-localeId';

type TransformType = ReturnType<CurrencyPipe['transform']>;
type CurrencyCodeType = Parameters<CurrencyPipe['transform']>[1];
type DisplayType = Parameters<CurrencyPipe['transform']>[2];
type DigitsInfoType = Parameters<CurrencyPipe['transform']>[3];
type LocaleType = Parameters<CurrencyPipe['transform']>[4];

@Pipe({
	name: 'i18nCurrency',
	standalone: true,
	pure: false,
})
export class I18nCurrencyPipe extends CurrencyPipe implements PipeTransform {
	constructor(@Inject(LOCALE_ID) private localeId: I18nLocaleId) {
		super(localeId.toString());
	}

	override transform(
		value: number | string,
		currencyCode?: CurrencyCodeType,
		display?: DisplayType,
		digitsInfo?: DigitsInfoType,
		locale?: LocaleType
	): TransformType;

	override transform(
		value: null | undefined,
		currencyCode?: CurrencyCodeType,
		display?: DisplayType,
		digitsInfo?: DigitsInfoType,
		locale?: LocaleType
	): null;

	override transform(
		value: number | string | null | undefined,
		currencyCode?: CurrencyCodeType,
		display?: DisplayType,
		digitsInfo?: DigitsInfoType,
		locale?: LocaleType,
	): TransformType {
		console.log(this.localeId);
		console.log(this.localeId.toString());
		locale = locale || this.localeId.toString();
		return super.transform(value, currencyCode, display, digitsInfo, locale);
	}
}
