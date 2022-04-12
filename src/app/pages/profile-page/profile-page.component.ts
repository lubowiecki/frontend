import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '@core/user/value-objects/user';
import { UserId } from '@core/user/value-objects/user-id';
import { RestUserGetService } from '@core/user/services/rest-user-get.service';

@Component({
	selector: 'app-profile-page',
	templateUrl: './profile-page.component.html',
	styleUrls: ['./profile-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePageComponent {
	user$: Observable<User>;

	isFetchingGetUser$ = this.restUserGetService.getIsFetching$();

	constructor(private restUserGetService: RestUserGetService) {
		this.user$ = this.restUserGetService.getUser$(UserId.create({
			id: '10000000-aaaa-dddd-ffff-000000000000',
		}));
	}
}
