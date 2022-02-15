import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsFormModule } from 'src/app/core/user/components/user-details-form/user-details-form.module';
import { customMatDatepickerIntl } from 'src/app/core/vendor/angular-material-config/datepicker/datepicker-intl-provider';

import { UserPageRoutingModule } from './user-page-routing.module';
import { UserPageComponent } from './user-page.component';

@NgModule({
	declarations: [
		UserPageComponent,
	],
	imports: [
		CommonModule,
		UserPageRoutingModule,
		UserDetailsFormModule,
	],
	providers: [customMatDatepickerIntl],
})
export class UserPageModule { }
