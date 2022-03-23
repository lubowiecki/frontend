import {
	HttpClient, HttpEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environment';
import { UserDto } from '@api/dtos/models';
import { FileDownload } from '@core/file/value-objects/file-download';

import { UserId } from '../value-objects/user-id';
import { User } from '../value-objects/user';

@Injectable({
	providedIn: 'root',
})
export class RestUserService {
	constructor(private httpClient: HttpClient) { }

	getUser$(userId: UserId): Observable<User> {
		return this.httpClient
			.get<UserDto>(`${environment.restUri}/user/${userId.id}`)
			.pipe(map((userDto) => User.fromDto(userDto)));
	}

	putUser$(user: User): Observable<User> {
		return this.httpClient
			.put<UserDto>(`${environment.restUri}/user/${user.id.id}`, user.toDto())
			.pipe(map((userDto) => User.fromDto(userDto)));
	}

	getUserCv$(userId: UserId): Observable<FileDownload> {
		return this.httpClient
			.get(`${environment.restUri}/user/cv/${userId.id}`, {
				reportProgress: true,
				observe: 'events',
				responseType: 'blob',
			})
			.pipe(
				map((event: HttpEvent<Blob>) => FileDownload.fromEvent(event)),
			);
	}
}
