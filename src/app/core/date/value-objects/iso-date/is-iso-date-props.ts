import { isObject } from '@opi_pib/ts-utility';
import { DateTime } from 'luxon';

import { IsoDateProps } from './iso-date-props';

export const isIsoDateProps = (obj: unknown): obj is IsoDateProps =>
	isObject(obj) &&
	obj.date instanceof DateTime;
