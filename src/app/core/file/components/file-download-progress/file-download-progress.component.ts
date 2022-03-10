import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Maybe } from '@lubowiecki/ts-utility';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

import { FileDownload } from '@core/file/value-objects/file-download';

@Component({
	selector: 'app-file-download-progress',
	templateUrl: './file-download-progress.component.html',
	styleUrls: ['./file-download-progress.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileDownloadProgressComponent {
	@Input() file: Maybe<FileDownload>;

	@Input() diameter: number;

	@Input() strokeWidth: number;

	mode: ProgressSpinnerMode;

	constructor() {
		this.mode = 'determinate';
		this.diameter = 18;
		this.strokeWidth = 3;
	}
}
