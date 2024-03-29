import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Is, Maybe } from '@opi_pib/ts-utility';
import { BehaviorSubject, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

import { FileDownload } from '@core/file/value-objects/file-download';
import { User } from '@core/user/value-objects/user';
import { RestUserCvGetService } from '@core/user/services/rest-user-cv-get.service';
import { UserId } from '@core/user/value-objects/user-id';
import { FileDownloadComponent } from '@core/file/components/file-download/file-download.component';
import { I18nModule } from '@core/i18n';

@Component({
	selector: 'app-user-download-cv',
	templateUrl: './user-download-cv.component.html',
	styleUrls: ['./user-download-cv.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [CommonModule, I18nModule, FileDownloadComponent],
})
export class UserDownloadCvComponent {
	@Input() user: Maybe<User>;

	#file: BehaviorSubject<Maybe<FileDownload>> = new BehaviorSubject<
		Maybe<FileDownload>
	>(null);

	constructor(private restUserCvGetService: RestUserCvGetService) {}

	protected getFile$(): Observable<Maybe<FileDownload>> {
		return this.#file.asObservable();
	}

	protected download(): void {
		const id: Maybe<UserId> = this.user?.id;

		if (Is.defined(id)) {
			this.restUserCvGetService.getUserCv$(id).subscribe((file) => {
				this.#file.next(file);
				file.saveLocally();
			});
		}
	}
}
