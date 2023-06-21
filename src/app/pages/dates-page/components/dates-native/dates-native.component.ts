import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Is, Maybe } from '@opi_pib/ts-utility';

import { IsoDate } from '@core/date/value-objects/iso-date';

@Component({
	selector: 'app-dates-native',
	templateUrl: './dates-native.component.html',
	styleUrls: ['../../dates-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule, MatInputModule],
})
export class DatesNativeComponent {
	constructor(private fb: FormBuilder) {}

	dateLocalSource = '2022-01-01';

	dateLocal = IsoDate.fromDto(this.dateLocalSource);

	dateLocalControl = this.fb.control<Maybe<string>>(this.dateLocal.toDto(), {
		validators: [IsoDate.validator()],
	});

	dateLocalControlValue(): Maybe<IsoDate> {
		if (
			this.dateLocalControl.valid &&
			Is.string(this.dateLocalControl.value)
		) {
			return IsoDate.fromDto(this.dateLocalControl.value);
		}

		return null;
	}
}
