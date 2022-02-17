import {
	always, isDefined, Maybe, ValueObject,
} from '@lubowiecki/ts-utility';

import { IsoDateWithTime } from '@core/date/value-objects/iso-date-with-time';
import { IsoDate } from '@core/date/value-objects/iso-date';
import { UserDto } from '@rest/dtos/models';

import { UserProps } from './user-props';
import { isUserProps } from './is-user-props';
import { UserId } from '../user-id';

export class User extends ValueObject<UserProps> {
	constructor(protected readonly props: UserProps) {
		super(props);
	}

	static create(props: UserProps): User {
		always(isUserProps(props), 'e0h9g8mu');

		return new User(props);
	}

	static fromDto(dto: UserDto): User {
		return this.create({
			...dto,
			id: UserId.create({ id: dto.id }),
			year: IsoDate.fromDto(dto.year),
			creationDate: IsoDateWithTime.fromDto(dto.creationDate),
			updateDate: isDefined(dto.updateDate) ? IsoDateWithTime.fromDto(dto.updateDate) : null,
		});
	}

	get id(): UserId {
		return this.props.id;
	}

	get firstname(): string {
		return this.props.firstname;
	}

	get lastname(): string {
		return this.props.lastname;
	}

	get year(): IsoDate {
		return this.props.year;
	}

	get creationDate(): IsoDateWithTime {
		return this.props.creationDate;
	}

	get updateDate(): Maybe<IsoDateWithTime> {
		return this.props.updateDate;
	}

	getProps(): UserProps {
		return this.props;
	}

	toDto(): UserDto {
		return {
			...this.props,
			id: this.id.toDto(),
			year: this.year.toDto(),
			creationDate: this.creationDate.toDto(),
			updateDate: this.updateDate?.toDto(),
		};
	}
}
