import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsFormModule } from 'src/app/core/user/components/user-details-form/user-details-form.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { I18nModule } from '@core/i18n';

import { ProfilePageComponent } from './profile-page.component';
import { ProfilePageRoutingModule } from './profile-page-routing.module';

@NgModule({
	declarations: [ProfilePageComponent],
	imports: [
		CommonModule,
		MatProgressSpinnerModule,
		I18nModule,
		ProfilePageRoutingModule,
		UserDetailsFormModule,
	],
})
export default class ProfilePageModule {}
