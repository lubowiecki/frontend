import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	Output,
} from '@angular/core';
import {
	always, isDefined, Maybe,
} from '@opi_pib/ts-utility';
import {
	FormBuilder, FormControl, FormGroup, Validators,
} from '@angular/forms';

import { User } from '@core/user/value-objects/user';
import { IsoDate } from '@core/date/value-objects/iso-date';
import { IsoDateWithTime } from '@core/date/value-objects/iso-date-with-time';
import { IsoDateWithTimeDto } from '@api/dtos/models';

interface UserForm {
	firstname: FormControl<string>;
	lastname: FormControl<string>;
	year: FormControl<Date | null>;
	creationDate: FormControl<IsoDateWithTimeDto | null>;
	updateDate: FormControl<IsoDateWithTimeDto | null>;
}

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

	protected formGroup: FormGroup<UserForm>;

	constructor(private fb: FormBuilder) {
		this.formGroup = this.fb.group<UserForm>({
			firstname: this.fb.nonNullable.control('', [Validators.minLength(3)]),
			lastname: this.fb.nonNullable.control(''),
			year: this.fb.control(null, [Validators.required]),
			creationDate: this.fb.control(null, [Validators.required]),
			updateDate: this.fb.control(null),
		});
	}

	protected update(): void {
		if (this.#user instanceof User && this.formGroup.valid) {
			always(isDefined(this.formGroup.value.year), 'oikuf9s4');
			always(isDefined(this.formGroup.value.creationDate), 'k4ofpr6w');

			const updatedUser = User.create({
				...this.#user.getProps(),
				...this.formGroup.value,
				year: IsoDate.fromJsDate(this.formGroup.value.year),
				creationDate: IsoDateWithTime.fromDto(this.formGroup.value.creationDate),
				updateDate: isDefined(this.formGroup.value.updateDate) ?
					IsoDateWithTime.fromDto(this.formGroup.value.updateDate) :
					null,
			});

			this.userChange.emit(updatedUser);
		}
	}

	protected reset(): void {
		this.formGroup.reset();
	}
}
