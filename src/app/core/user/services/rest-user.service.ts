import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environment';
import { UserDto } from '@rest/dtos/models';

import { UserId } from '../value-objects/user-id';
import { User } from '../value-objects/user';

@Injectable({
	providedIn: 'root',
})
export class RestUserService {
	constructor(private httpClient: HttpClient) { }

	getUser$(userId: UserId): Observable<User> {
		return this.httpClient
			.get<UserDto>(`${environment.restUri}/user/id/${userId.id}`)
			.pipe(map((userDto) => User.fromDto(userDto)));
	}

	putUser$(user: User): Observable<User> {
		return this.httpClient
			.put<UserDto>(`${environment.restUri}/user/id/${user.id.id}`, user.toDto())
			.pipe(map((userDto) => User.fromDto(userDto)));
	}
}
