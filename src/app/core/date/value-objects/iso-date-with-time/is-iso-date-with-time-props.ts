import { isObject } from '@lubowiecki/ts-utility';
import { DateTime } from 'luxon';

import { IsoDateWithTimeProps } from './iso-date-with-time-props';

export const isIsoDateWithTimeProps = (obj: unknown): obj is IsoDateWithTimeProps =>
	isObject(obj) &&
	obj.date instanceof DateTime;
