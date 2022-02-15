import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

import { RestUserService } from '@core/user/services/rest-user.service';
import { User } from '@core/user/value-objects/user';
import { UserId } from '@core/user/value-objects/user-id';

@Component({
	selector: 'app-profile-page',
	templateUrl: './profile-page.component.html',
	styleUrls: ['./profile-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePageComponent {
	user$: Observable<User>;

	constructor(private restUserService: RestUserService) {
		this.user$ = this.restUserService.getUser$(UserId.create({
			id: '10000000-aaaa-dddd-ffff-000000000000',
		}));
	}
}
