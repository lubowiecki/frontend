import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RestQuery } from '@opi_pib/ngx-utility';

import { environment } from '@environment';
import { UserDto } from '@api/rest/models';

import { User } from '../value-objects/user';
import { UserId } from '../value-objects/user-id';

@Injectable({
	providedIn: 'root',
})
export class RestUserGetService extends RestQuery {
	constructor(private httpClient: HttpClient) {
		super();
	}

	getUser$(userId: UserId): Observable<User> {
		return this.query$(
			this.httpClient
				.get<UserDto>(`${environment.restUri}/user/${userId.id}`),
		).pipe(map((userDto) => User.fromDto(userDto)));
	}
}
