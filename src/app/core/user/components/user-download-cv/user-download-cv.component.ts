import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Maybe } from '@lubowiecki/ts-utility';
import { BehaviorSubject, Observable } from 'rxjs';

import { FileDownload } from '@core/file/value-objects/file-download';
import { RestUserService } from '@core/user/services/rest-user.service';
import { User } from '@core/user/value-objects/user';

@Component({
	selector: 'app-user-download-cv',
	templateUrl: './user-download-cv.component.html',
	styleUrls: ['./user-download-cv.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDownloadCvComponent {
	@Input() user: User;

	#file: BehaviorSubject<Maybe<FileDownload>> = new BehaviorSubject<Maybe<FileDownload>>(null);

	constructor(private restUserService: RestUserService) { }

	getFile$(): Observable<Maybe<FileDownload>> {
		return this.#file.asObservable();
	}

	download(): void {
		this.restUserService.getUserCv$(this.user.id).subscribe((file) => {
			this.#file.next(file);
		});
	}
}
