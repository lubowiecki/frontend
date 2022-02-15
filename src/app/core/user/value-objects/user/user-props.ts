import { Maybe } from '@lubowiecki/ts-utility';

import { IsoDate } from '@core/date/value-objects/iso-date';
import { IsoDateWithTime } from '@core/date/value-objects/iso-date-with-time';

import { UserId } from '../user-id';

export interface UserProps {
    id: UserId;
    firstname: string;
    lastname: string;
	year: IsoDate;
	creationDate: IsoDateWithTime;
	updateDate: Maybe<IsoDateWithTime>;
}
