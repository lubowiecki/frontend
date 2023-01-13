import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RestQuery } from '@opi_pib/ngx-utility';

import { environment } from '@environment';
import { UserDto } from '@api/rest/models';

import { User } from '../value-objects/user';

@Injectable({
	providedIn: 'root',
})
export class RestUserPutService extends RestQuery {
	constructor(private httpClient: HttpClient) {
		super();
	}

	putUser$(user: User): Observable<User> {
		return this.query$(
			this.httpClient
				.put<UserDto>(`${environment.restUri}/user/${user.id.id}`, user.toDto()),
		).pipe(
			map((userDto) => User.fromDto(userDto)),
		);
	}
}
