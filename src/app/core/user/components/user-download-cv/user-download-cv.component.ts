import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Is, Maybe } from '@opi_pib/ts-utility';
import { BehaviorSubject, Observable } from 'rxjs';

import { FileDownload } from '@core/file/value-objects/file-download';
import { User } from '@core/user/value-objects/user';
import { RestUserCvGetService } from '@core/user/services/rest-user-cv-get.service';
import { UserId } from '@core/user/value-objects/user-id';
import { UserService } from '@api/rest/services';

@Component({
	selector: 'app-user-download-cv',
	templateUrl: './user-download-cv.component.html',
	styleUrls: ['./user-download-cv.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDownloadCvComponent {
	@Input() user: Maybe<User>;

	#file: BehaviorSubject<Maybe<FileDownload>> = new BehaviorSubject<Maybe<FileDownload>>(null);

	constructor(
		private restUserCvGetService: RestUserCvGetService,
		private userService: UserService,
	) { }

	getFile$(): Observable<Maybe<FileDownload>> {
		return this.#file.asObservable();
	}

	download(): void {
		const id: Maybe<UserId> = this.user?.id;

		if (Is.defined(id)) {
			this.restUserCvGetService.getUserCv$(id).subscribe((file) => {
				this.#file.next(file);
				file.saveLocally();
			});
		}
	}
}
