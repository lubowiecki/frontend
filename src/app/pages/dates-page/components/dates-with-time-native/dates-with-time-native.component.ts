import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Is, Maybe } from '@opi_pib/ts-utility';
import { DateTime } from 'luxon';

import { IsoDateWithTime } from '@core/date/value-objects/iso-date-with-time';

@Component({
	selector: 'app-dates-with-time-native',
	templateUrl: './dates-with-time-native.component.html',
	styleUrls: ['../../dates-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MatInputModule,
	],
})
export class DatesWithTimeNativeComponent {
	constructor(private fb: FormBuilder) { }

	dateWithTimeUtcSource = '2022-01-01T08:00:00Z';

	dateWithTimeUtc = IsoDateWithTime.fromDateTime(DateTime.fromISO(this.dateWithTimeUtcSource, { zone: 'utc' }).toLocal());

	dateWithTimeUtcControl = this.fb.control<Maybe<string>>(this.dateWithTimeUtc.toDto());

	dateWithTimeUtcControlValue(): Maybe<IsoDateWithTime> {
		console.log('dto', this.dateWithTimeUtc.toDto());
		console.log(this.dateWithTimeUtcControl.value);
		if (this.dateWithTimeUtcControl.valid && Is.string(this.dateWithTimeUtcControl.value)) {
			return IsoDateWithTime.fromDto(this.dateWithTimeUtcControl.value);
		}

		return null;
	}
}
