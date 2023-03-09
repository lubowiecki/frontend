import { Is } from '@opi_pib/ts-utility';
import { test } from 'ramda';

import { IsoDateWithTimeDto } from '@api/rest/models';

export const isIsoDateWithTimeDto = (value: unknown): value is IsoDateWithTimeDto =>
	Is.string(value) &&
	test(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2})?Z?(\.\d{3})?([+-]\d{2}:\d{2})?$/, value);
