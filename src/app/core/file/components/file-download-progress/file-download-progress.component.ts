import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Maybe } from '@opi_pib/ts-utility';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';
import { CommonModule } from '@angular/common';

import { FileDownload } from '@core/file/value-objects/file-download';

@Component({
	selector: 'app-file-download-progress',
	templateUrl: './file-download-progress.component.html',
	styleUrls: ['./file-download-progress.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [CommonModule, MatProgressSpinnerModule],
})
export class FileDownloadProgressComponent {
	@Input() file: Maybe<FileDownload>;

	@Input() strokeWidth = 15;

	@Input() color: ThemePalette = 'primary';

	@Input() inline = true;
}
