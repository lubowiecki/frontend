import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { I18nModule } from '@core/i18n';

import { UserPageDialogComponent } from './components/user-page-dialog/user-page-dialog.component';
import { UserPageDialogsService } from './services/user-page-dialogs.service';

@NgModule({
	declarations: [UserPageDialogComponent],
	imports: [
		CommonModule,
		MatDialogModule,
		I18nModule,
	],
	providers: [UserPageDialogsService],
})
export class UserPageDialogsModule { }
