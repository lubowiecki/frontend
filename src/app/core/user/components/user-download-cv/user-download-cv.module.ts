import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileDownloadProgressModule } from '@core/file/components/file-download-progress/file-download-progress.module';
import { TranslationModule } from '@core/translation/translation.module';
import { FileDownloadModule } from '@core/file/components/file-download/file-download.module';

import { UserDownloadCvComponent } from './user-download-cv.component';

@NgModule({
	declarations: [
		UserDownloadCvComponent,
	],
	imports: [
		CommonModule,
		TranslationModule,
		FileDownloadProgressModule,
		FileDownloadModule,
	],
	exports: [
		UserDownloadCvComponent,
	],
})
export class UserDownloadCvModule { }
