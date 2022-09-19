import {
	Component, ChangeDetectionStrategy, Input, Output, EventEmitter,
} from '@angular/core';
import { Maybe } from '@opi_pib/ts-utility';

import { FileDownload } from '@core/file/value-objects/file-download';

@Component({
	selector: 'app-file-download',
	templateUrl: './file-download.component.html',
	styleUrls: ['./file-download.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileDownloadComponent {
	@Input() label: string;

	@Input() file: Maybe<FileDownload>;

	@Output() download: EventEmitter<void> = new EventEmitter();

	onDownload(): void {
		if (this.file) {
			this.file.saveLocally();
			return;
		}

		this.download.emit();
	}
}
