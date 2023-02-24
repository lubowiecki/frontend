import { always, ValueObject } from '@opi_pib/ts-utility';
import { DateTime } from 'luxon';

import { IsoDateDto } from '@api/rest/models';

import { IsoDateProps } from './iso-date-props';
import { isIsoDateProps } from './is-iso-date-props';
import { isIsoDateDto } from './is-iso-date-dto';

export class IsoDate extends ValueObject<IsoDateProps> {
	constructor(protected override readonly props: IsoDateProps) {
		super(props);
	}

	static create(props: IsoDateProps): IsoDate {
		always(isIsoDateProps(props), '8xckoi54');

		return new IsoDate(props);
	}

	static fromDto(dto: IsoDateDto): IsoDate {
		always(isIsoDateDto(dto), 'y29o3df2');

		return this.create({ date: DateTime.fromISO(dto) });
	}

	static fromDateTime(date: DateTime): IsoDate {
		always(date instanceof DateTime, 'thjx2or7');

		return this.create({ date });
	}

	get date(): DateTime {
		return this.props.date;
	}

	toDto(): IsoDateDto {
		return this.date.toISODate();
	}

	toView(): string {
		return this.date.toLocaleString();
	}
}
