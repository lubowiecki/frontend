import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { FileDownloadProgressComponent } from './file-download-progress.component';

@NgModule({
	declarations: [
		FileDownloadProgressComponent,
	],
	imports: [
		CommonModule,
		MatProgressSpinnerModule,
	],
	exports: [
		FileDownloadProgressComponent,
	],
})
export class FileDownloadProgressModule { }
