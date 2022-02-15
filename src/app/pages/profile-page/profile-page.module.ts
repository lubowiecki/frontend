import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsFormModule } from 'src/app/core/user/components/user-details-form/user-details-form.module';
import { customMatDatepickerIntl } from 'src/app/core/vendor/angular-material-config/datepicker/datepicker-intl-provider';

import { ProfilePageComponent } from './profile-page.component';
import { ProfilePageRoutingModule } from './profile-page-routing.module';

@NgModule({
	declarations: [
		ProfilePageComponent,
	],
	imports: [
		CommonModule,
		ProfilePageRoutingModule,
		UserDetailsFormModule,
	],
	providers: [customMatDatepickerIntl],
})
export class ProfilePageModule { }
