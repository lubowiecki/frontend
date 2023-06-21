import {
	Component,
	ChangeDetectionStrategy,
	Input,
	Output,
	EventEmitter,
} from '@angular/core';
import { Is, Maybe } from '@opi_pib/ts-utility';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { FileDownload } from '@core/file/value-objects/file-download';

import { FileDownloadProgressComponent } from '../file-download-progress/file-download-progress.component';

@Component({
	selector: 'app-file-download',
	templateUrl: './file-download.component.html',
	styleUrls: ['./file-download.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [CommonModule, MatButtonModule, FileDownloadProgressComponent],
})
export class FileDownloadComponent {
	@Input() label = '';

	@Input() file: Maybe<FileDownload>;

	@Output() download: EventEmitter<void> = new EventEmitter();

	onDownload(): void {
		if (Is.instanceOf(FileDownload, this.file)) {
			this.file.saveLocally();
		} else {
			this.download.emit();
		}
	}
}
