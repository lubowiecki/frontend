import { Is } from '@opi_pib/ts-utility';
import { test } from 'ramda';

import { IsoDateDto } from '@api/rest/models';

export const isIsoDateDto = (value: unknown): value is IsoDateDto =>
	Is.string(value) &&
	test(/^\d{4}-\d{2}-\d{2}$/, value);
