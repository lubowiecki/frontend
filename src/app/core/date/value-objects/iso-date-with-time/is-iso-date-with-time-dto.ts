import { isOfType, OfType } from '@lubowiecki/ts-utility';
import * as R from 'ramda';

import { IsoDateWithTimeDto } from '@api/dtos/models';

export const isIsoDateWithTimeDto = (value: unknown): value is IsoDateWithTimeDto =>
	isOfType(OfType.string, value) &&
	R.test(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z?$/, value);
