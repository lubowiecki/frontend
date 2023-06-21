import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	Output,
} from '@angular/core';
import { always, Is, Maybe } from '@opi_pib/ts-utility';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '@core/user/value-objects/user';
import { IsoDate } from '@core/date/value-objects/iso-date';
import { IsoDateWithTime } from '@core/date/value-objects/iso-date-with-time';
import { UserDetailsFormControls } from '@core/user/models/user-details-form';

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
				year: value.year.date,
				creationDate: value.creationDate.toDto(),
				updateDate: value.updateDate?.toDto(),
			});
			this.#user = value;
		}
	}

	@Input() readonly = false;

	@Output() userChange = new EventEmitter<User>();

	protected formGroup: FormGroup<UserDetailsFormControls>;

	constructor(private fb: FormBuilder) {
		this.formGroup = this.fb.group<UserDetailsFormControls>({
			firstname: this.fb.nonNullable.control('', [
				Validators.minLength(3),
			]),
			lastname: this.fb.nonNullable.control(''),
			year: this.fb.control(null, [Validators.required]),
			creationDate: this.fb.control(null, [Validators.required]),
			updateDate: this.fb.control(null),
		});
	}

	protected update(): void {
		if (this.#user instanceof User && this.formGroup.valid) {
			const { value } = this.formGroup;
			always(Is.defined(value.year), 'oikuf9s4');
			always(Is.defined(value.creationDate), 'k4ofpr6w');

			const updatedUser = User.create({
				...this.#user.getProps(),
				...value,
				year: IsoDate.fromDateTime(value.year),
				creationDate: IsoDateWithTime.fromDto(value.creationDate),
				updateDate: Is.defined(value.updateDate)
					? IsoDateWithTime.fromDto(value.updateDate)
					: null,
			});

			this.userChange.emit(updatedUser);
		}
	}

	protected reset(): void {
		this.formGroup.reset();
	}
}
