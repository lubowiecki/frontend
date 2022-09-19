import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Maybe } from '@opi_pib/ts-utility';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';

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

	@Input() strokeWidth: number = 15;

	@Input() color: ThemePalette = 'primary';

	@Input() inline: boolean = true;

	mode: ProgressSpinnerMode = 'determinate';
}
