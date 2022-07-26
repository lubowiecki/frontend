import { z } from 'zod';

import { IsoDate } from '@core/date/value-objects/iso-date';
import { IsoDateWithTime } from '@core/date/value-objects/iso-date-with-time';

import { UserId } from '../user-id';

export const UserPropsSchema = z.object({
	id: z.instanceof(UserId),
	firstname: z.string(),
	lastname: z.string(),
	year: z.instanceof(IsoDate),
	creationDate: z.instanceof(IsoDateWithTime),
	updateDate: z.instanceof(IsoDateWithTime).nullable(),
});

export type UserProps = z.infer<typeof UserPropsSchema>;
