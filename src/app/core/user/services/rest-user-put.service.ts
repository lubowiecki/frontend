import { HttpClient, HttpParams } from '@angular/common/http';
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
		const params = new HttpParams({
			fromObject: {
				userId: user.id.id,
			},
		});

		return this.query$(
			this.httpClient
				.put<UserDto>(`${environment.restUri}/user`, user.toDto(), {
					params,
				}),
		).pipe(
			map((userDto) => User.fromDto(userDto)),
		);
	}
}
