import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { UserDetailsFormModule } from '@core/user/components/user-details-form/user-details-form.module';
import { UserDownloadCvComponent } from '@core/user/components/user-download-cv/user-download-cv.component';
import { MatDatepickerIntlProvider } from '@core/vendor/angular-material';

import { UserPageRoutingModule } from './user-page-routing.module';
import { UserPageComponent } from './user-page.component';
import { UserPageDialogsModule } from './user-page-dialogs/user-page-dialogs.module';

@NgModule({
	declarations: [
		UserPageComponent,
	],
	imports: [
		CommonModule,
		MatProgressSpinnerModule,
		UserPageRoutingModule,
		UserDetailsFormModule,
		UserDownloadCvComponent,
		UserPageDialogsModule,
	],
	providers: [
		MatDatepickerIntlProvider,
	],
})
export class UserPageModule { }
