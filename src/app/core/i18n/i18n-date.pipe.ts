import { DatePipe } from '@angular/common';
import {
	Inject, LOCALE_ID, Pipe, PipeTransform,
} from '@angular/core';
import { Is, Maybe } from '@opi_pib/ts-utility';

import { I18nLocaleId } from './i18n-localeId';

@Pipe({
	name: 'i18nDate',
	standalone: true,
})
export class I18nDatePipe extends DatePipe implements PipeTransform {
	constructor(@Inject(LOCALE_ID) private localeId: I18nLocaleId) {
		super(localeId.toString());
	}

	override transform(value: Date | string | number, format?: string, timezone?: string, locale?: string): string | null;

	override transform(value: null | undefined, format?: string, timezone?: string, locale?: string): null;

	override transform(value: Date | string | number | null | undefined, format?: string, timezone?: string, locale?: string): string | null;

	override transform(value: Maybe<Date | string | number>, format?: string, timezone?: string, locale?: string) {
		console.log(this.localeId);
		if (!Is.defined(value)) return null;

		locale = locale || this.localeId.toString();
		return super.transform(value, format, timezone, locale);
	}
}
