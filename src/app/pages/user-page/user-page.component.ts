import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { Maybe } from '@lubowiecki/ts-utility';

import { User } from '@core/user/value-objects/user';
import { IsoDateWithTime } from '@core/date/value-objects/iso-date-with-time';
import { DateWithTimeService } from '@core/date/services/date-with-time.service';
import { UserId } from '@core/user/value-objects/user-id';
import { RestUserPutService } from '@core/user/services/rest-user-put.service';
import { RestUserGetService } from '@core/user/services/rest-user-get.service';

@Component({
	selector: 'app-user-page',
	templateUrl: './user-page.component.html',
	styleUrls: ['./user-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPageComponent implements OnDestroy {
	user$: Observable<User>;

	isFetchingGetUser$ = this.restUserGetService.getIsFetching$();

	relativeUpdateDate: Maybe<string>;

	#updateDate$ = new Subject<IsoDateWithTime>();

	#subscriptions = new Subscription();

	constructor(
		private restUserGetService: RestUserGetService,
		private restUserPutService: RestUserPutService,
		private dateService: DateWithTimeService,
	) {
		this.user$ = this.restUserGetService.getUser$(
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

		this.restUserPutService.putUser$(user).subscribe();
	}

	getRelativeUpdateDate(): Subscription {
		return this.dateService
			.getRelativeDate$(this.#updateDate$)
			.subscribe((date) => {
				this.relativeUpdateDate = date;
			});
	}
}
