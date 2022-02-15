import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	Output,
} from '@angular/core';
import {
	isDefined, Maybe,
} from '@lubowiecki/ts-utility';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '@core/user/value-objects/user';
import { IsoDate } from '@core/date/value-objects/iso-date';
import { IsoDateWithTime } from '@core/date/value-objects/iso-date-with-time';

@Component({
	selector: 'app-user-details-form',
	templateUrl: './user-details-form.component.html',
	styleUrls: ['./user-details-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsFormComponent {
	#user: Maybe<User>;

	@Input() set user(value: Maybe<User>) {
		if (value instanceof User) {
			this.formGroup.patchValue({
				firstname: value.firstname,
				lastname: value.lastname,
				year: value.year.toJsDate(),
				creationDate: value.creationDate.toDto(),
				updateDate: value.updateDate?.toDto(),
			});
			this.#user = value;
		}
	}

	@Input() readonly: boolean;

	@Output() userChange = new EventEmitter<User>();

	formGroup: FormGroup;

	constructor(private fb: FormBuilder) {
		this.formGroup = this.fb.group({
			firstname: ['', [Validators.minLength(3)]],
			lastname: [''],
			year: [null],
			creationDate: [null],
			updateDate: [null],
		});
	}

	update(): void {
		if (this.#user instanceof User) {
			const updatedUser = User.create({
				...this.#user.getProps(),
				...this.formGroup.value,
				year: IsoDate.fromJsDate(this.formGroup.value.year),
				creationDate: IsoDateWithTime.fromDto(
					this.formGroup.value.creationDate,
				),
				updateDate: isDefined(this.formGroup.value.updateDate) ?
					IsoDateWithTime.fromDto(this.formGroup.value.updateDate) :
					undefined,
			});

			this.userChange.emit(updatedUser);
		}
	}
}
