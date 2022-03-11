import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { FileDownloadComponent } from './file-download.component';
import { FileDownloadProgressModule } from '../file-download-progress/file-download-progress.module';

@NgModule({
	declarations: [
		FileDownloadComponent,
	],
	imports: [
		CommonModule,
		MatButtonModule,
		FileDownloadProgressModule,
	],
	exports: [
		FileDownloadComponent,
	],
})
export class FileDownloadModule { }
