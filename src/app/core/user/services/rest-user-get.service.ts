import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { UserDto } from '@api/dtos/models';
import { RestQuery } from '@api/rest/rest-query';
import { environment } from '@environment';

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
