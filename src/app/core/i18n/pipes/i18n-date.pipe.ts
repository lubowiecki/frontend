import { DatePipe } from '@angular/common';
import {
	Inject, LOCALE_ID, Pipe, PipeTransform,
} from '@angular/core';
import { Is, Maybe } from '@opi_pib/ts-utility';

import { I18nLocaleId } from '../core/i18n-localeId';

type TransformType = ReturnType<DatePipe['transform']>;
type FormatType = Parameters<DatePipe['transform']>[1];
type TimezoneType = Parameters<DatePipe['transform']>[2];
type LocaleType = Parameters<DatePipe['transform']>[3];

@Pipe({
	name: 'i18nDate',
	standalone: true,
	pure: false,
})
export class I18nDatePipe extends DatePipe implements PipeTransform {
	constructor(@Inject(LOCALE_ID) private localeId: I18nLocaleId) {
		super(localeId.toString());
	}

	override transform(
		value: Date | string | number,
		format?: FormatType,
		timezone?: TimezoneType,
		locale?: LocaleType
	): TransformType;

	override transform(
		value: null | undefined,
		format?: FormatType,
		timezone?: TimezoneType,
		locale?: LocaleType
	): null;

	override transform(
		value: Date | string | number | null | undefined,
		FormatType?: string,
		timezone?: TimezoneType,
		locale?: LocaleType
	): TransformType;

	override transform(value: Maybe<Date | string | number>, format?: string, timezone?: string, locale?: string) {
		if (!Is.defined(value)) return null;

		locale = locale || this.localeId.toString();
		return super.transform(value, format, timezone, locale);
	}
}
