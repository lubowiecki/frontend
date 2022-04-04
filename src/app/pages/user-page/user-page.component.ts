import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { Maybe } from '@lubowiecki/ts-utility';
import { webSocket } from 'rxjs/webSocket';

import { RestUserService } from '@core/user/services/rest-user.service';
import { User } from '@core/user/value-objects/user';
import { IsoDateWithTime } from '@core/date/value-objects/iso-date-with-time';
import { DateWithTimeService } from '@core/date/services/date-with-time.service';
import { UserId } from '@core/user/value-objects/user-id';

@Component({
	selector: 'app-user-page',
	templateUrl: './user-page.component.html',
	styleUrls: ['./user-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPageComponent implements OnDestroy {
	user$: Observable<User>;

	relativeUpdateDate: Maybe<string>;

	#updateDate$ = new Subject<IsoDateWithTime>();

	#subscriptions: Subscription;

	constructor(
		private restUserService: RestUserService,
		private dateService: DateWithTimeService,
	) {
		this.#subscriptions = new Subscription();

		this.user$ = this.restUserService.getUser$(
			UserId.create({
				id: '10000000-aaaa-dddd-ffff-000000000000',
			}),
		);

		this.#subscriptions.add(this.getRelativeUpdateDate());
	}

	ngOnDestroy(): void {
		this.#subscriptions.unsubscribe();
	}

	update(user: User): void {
		if (user.updateDate instanceof IsoDateWithTime) {
			this.#updateDate$.next(user.updateDate);
		}

		this.restUserService.putUser$(user).subscribe();
	}

	getRelativeUpdateDate(): Subscription {
		return this.dateService
			.getRelativeDate$(this.#updateDate$)
			.subscribe((date) => {
				this.relativeUpdateDate = date;
			});
	}
}
