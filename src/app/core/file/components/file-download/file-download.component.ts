import {
	Component, ChangeDetectionStrategy, Input, Output, EventEmitter,
} from '@angular/core';
import { Maybe } from '@lubowiecki/ts-utility';

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
			this.saveFile(this.file);
			return;
		}

		this.download.emit();
	}

	saveFile(file: FileDownload): void {
		if (!(file.content && file.name)) return;

		const anchorElement = document.createElement('a');
		const href = URL.createObjectURL(file.content);

		anchorElement.href = href;
		anchorElement.download = file.name;
		anchorElement.click();

		URL.revokeObjectURL(href);
	}
}
