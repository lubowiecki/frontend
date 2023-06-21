import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IsoDateWithTime } from '@core/date/value-objects/iso-date-with-time';

@Component({
	selector: 'app-dates-with-time',
	templateUrl: './dates-with-time.component.html',
	styleUrls: ['../../dates-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [CommonModule],
})
export class DatesWithTimeComponent {
	dateWithTimeUtcSource = '2022-01-01T08:00:00Z';

	dateWithTimeUtc = IsoDateWithTime.fromDto(this.dateWithTimeUtcSource);

	dateWithTimeZoneSource = '2022-01-01T08:00:00+02:00';

	dateWithTimeZone = IsoDateWithTime.fromDto(this.dateWithTimeZoneSource);

	dateWithTimeLocalSource = '2022-01-01T08:00:00';

	dateWithTimeLocal = IsoDateWithTime.fromDto(this.dateWithTimeLocalSource);
}
