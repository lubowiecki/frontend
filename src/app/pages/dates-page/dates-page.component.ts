import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Maybe } from '@opi_pib/ts-utility';
import { DateTime } from 'luxon';

import { IsoDate } from '@core/date/value-objects/iso-date';
import { IsoDateWithTime } from '@core/date/value-objects/iso-date-with-time';
import { MatDatepickerIntlModule } from '@core/vendor/angular-material';

@Component({
	selector: 'app-dates-page',
	templateUrl: './dates-page.component.html',
	styleUrls: ['./dates-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatDatepickerIntlModule,
	],
})
export class DatesPageComponent {
	constructor(private fb: FormBuilder) { }

	dateLocalSource = '2022-01-01';

	dateLocal = IsoDate.fromDto(this.dateLocalSource);

	dateWithTimeUtcSource = '2022-01-01T08:00:00Z';

	dateWithTimeUtc = IsoDateWithTime.fromDto(this.dateWithTimeUtcSource);

	dateWithTimeZoneSource = '2022-01-01T08:00:00+02:00';

	dateWithTimeZone = IsoDateWithTime.fromDto(this.dateWithTimeZoneSource);

	dateWithTimeLocalSource = '2022-01-01T08:00:00';

	dateWithTimeLocal = IsoDateWithTime.fromDto(this.dateWithTimeLocalSource);

	dateLocalControl = this.fb.control<Maybe<DateTime>>(this.dateLocal.date);

	dateLocalControlValue(): Maybe<IsoDate> {
		if (this.dateLocalControl.value instanceof DateTime) {
			return IsoDate.fromDateTime(this.dateLocalControl.value);
		}

		return null;
	}

	dateWithTimeUtcDatepickerSource = '2022-01-01T00:00:00Z';

	dateWithTimeUtcDatepicker = IsoDateWithTime.fromDto(this.dateWithTimeUtcDatepickerSource);

	dateWithTimeUtcControl = this.fb.control<Maybe<DateTime>>(this.dateWithTimeUtcDatepicker.date);

	dateWithTimeUtcControlValue(): Maybe<IsoDateWithTime> {
		if (this.dateWithTimeUtcControl.value instanceof DateTime) {
			return IsoDateWithTime.fromDateTime(this.dateWithTimeUtcControl.value);
		}

		return null;
	}
}