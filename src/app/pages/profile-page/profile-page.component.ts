import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '@core/user/value-objects/user';
import { UserId } from '@core/user/value-objects/user-id';
import { RestUserGetService } from '@core/user/services/rest-user-get.service';
import { RestQuery } from '@api/rest/rest-query';

@Component({
	selector: 'app-profile-page',
	templateUrl: './profile-page.component.html',
	styleUrls: ['./profile-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePageComponent {
	user$: Observable<User>;

	isFetchingGetUser$ = RestQuery.isFetchingAny$([this.restUserGetService.isFetching$()]);

	constructor(private restUserGetService: RestUserGetService) {
		this.user$ = this.restUserGetService.getUser$(UserId.create({
			id: '00000000-aaaa-dddd-ffff-000000000000',
		}));
	}
}
