import {
	always, Is, Maybe, ValueObject,
} from '@opi_pib/ts-utility';
import { DateTime } from 'luxon';

import { IsoDateWithTimeDto } from '@api/rest/models';
import { TranslationLanguage } from '@core/i18n/translation-language';

import { IsoDateWithTimeProps } from './iso-date-with-time-props';
import { isIsoDateWithTimeProps } from './is-iso-date-with-time-props';
import { isIsoDateWithTimeDto } from './is-iso-date-with-time-dto';

export class IsoDateWithTime extends ValueObject<IsoDateWithTimeProps> {
	constructor(protected override readonly props: IsoDateWithTimeProps) {
		super(props);
	}

	static create(props: IsoDateWithTimeProps): IsoDateWithTime {
		always(isIsoDateWithTimeProps(props), 'eo1uzfwi');

		return new IsoDateWithTime(props);
	}

	static fromDateTime(date: DateTime): IsoDateWithTime {
		always(date instanceof DateTime, '9i2k3vua');

		return this.create({ date });
	}

	static fromDto(dto: IsoDateWithTimeDto, forceUtc = false): IsoDateWithTime {
		always(isIsoDateWithTimeDto(dto), 'szt19626');

		let date = DateTime.fromISO(dto);

		if (forceUtc) {
			date = date.toUTC();
		}

		return this.create({ date });
	}

	get date(): DateTime {
		return this.props.date;
	}

	get isValid(): boolean {
		return this.props.date.isValid;
	}

	toDto(): IsoDateWithTimeDto {
		const isoDate = this.date.toUTC().toISO({ includeOffset: true, suppressMilliseconds: true });
		always(Is.string(isoDate), '8b6wq1e1');

		return isoDate;
	}

	toView(): string {
		return this.date.toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS);
	}

	formatRelative(lang: TranslationLanguage): Maybe<string> {
		return this.date.toRelative({ locale: lang.toDto() });
	}
}
