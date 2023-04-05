import { CurrencyPipe } from '@angular/common';
import {
	Inject, LOCALE_ID, Pipe, PipeTransform,
} from '@angular/core';

import { I18nLocaleIdBase } from '../i18n-localeId-base';

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
export class I18nCurrencyPipeBase<TranslationKey extends string, TranslationLanguageEnum extends string>
	extends CurrencyPipe implements PipeTransform {
	constructor(@Inject(LOCALE_ID) protected localeId: I18nLocaleIdBase<TranslationKey, TranslationLanguageEnum>) {
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
		locale = locale || this.localeId.toString();
		return super.transform(value, currencyCode, display, digitsInfo, locale);
	}
}
