import { isOfType, OfType } from '@lubowiecki/ts-utility';
import * as R from 'ramda';

import { IsoDateDto } from '@rest/dtos/models';

export const isIsoDateDto = (value: unknown): value is IsoDateDto =>
	isOfType(OfType.string, value) &&
	R.test(/^\d{4}-\d{2}-\d{2}$/, value);
