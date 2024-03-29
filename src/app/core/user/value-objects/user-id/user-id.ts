import { always, ValueObject } from '@opi_pib/ts-utility';

import { UuidDto } from '@api/rest/models';

import { UserIdProps } from './user-id-props';
import { isUserIdProps } from './is-user-id-props';

export class UserId extends ValueObject<UserIdProps> {
	constructor(protected override readonly props: UserIdProps) {
		super(props);
	}

	static create(props: UserIdProps): UserId {
		always(isUserIdProps(props), 'iz78e2l0');

		return new UserId(props);
	}

	get id(): UuidDto {
		return this.props.id;
	}

	toDto(): UuidDto {
		return this.id;
	}
}
