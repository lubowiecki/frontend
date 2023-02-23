import { always, Maybe, ValueObject } from '@opi_pib/ts-utility';
import { DateTime } from 'luxon';

import { IsoDateWithTimeDto } from '@api/rest/models';
import { TranslationLanguage } from '@core/translation';

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

	static fromDto(dto: IsoDateWithTimeDto): IsoDateWithTime {
		always(isIsoDateWithTimeDto(dto), 'szt19626');

		return this.create({ date: DateTime.fromISO(dto) });
	}

	get date(): DateTime {
		return this.props.date;
	}

	toDto(): IsoDateWithTimeDto {
		return this.date.toISO({ includeOffset: false, suppressMilliseconds: true });
	}

	formatRelative(lang: TranslationLanguage): Maybe<string> {
		return this.date.toRelative({ locale: lang.toDto() });
	}
}
