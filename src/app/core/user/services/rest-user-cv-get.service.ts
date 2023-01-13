import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RestQuery } from '@opi_pib/ngx-utility';

import { FileDownload } from '@core/file/value-objects/file-download';
import { environment } from '@environment';

import { UserId } from '../value-objects/user-id';

@Injectable({
	providedIn: 'root',
})
export class RestUserCvGetService extends RestQuery {
	constructor(private httpClient: HttpClient) {
		super();
	}

	getUserCv$(userId: UserId): Observable<FileDownload> {
		return this.query$(
			this.httpClient
				.get(`${environment.restUri}/user/cv/${userId.id}`, {
					reportProgress: true,
					observe: 'events',
					responseType: 'blob',
				}),
		).pipe(
			map((event: HttpEvent<Blob>) => FileDownload.fromHttpEvent(event)),
		);
	}
}
