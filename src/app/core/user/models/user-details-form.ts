import { FormControlsOf } from '@opi_pib/ngx-utility';
import { DateTime } from 'luxon';

import { IsoDateWithTimeDto } from '@api/rest/models';

export interface UserDetailsFormValue {
	firstname: string;
	lastname: string;
	year: DateTime | null;
	creationDate: IsoDateWithTimeDto | null;
	updateDate: IsoDateWithTimeDto | null;
}

export type UserDetailsFormControls = FormControlsOf<UserDetailsFormValue>;
