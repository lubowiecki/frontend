import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsFormModule } from 'src/app/core/user/components/user-details-form/user-details-form.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ProfilePageComponent } from './profile-page.component';
import { ProfilePageRoutingModule } from './profile-page-routing.module';

@NgModule({
	declarations: [
		ProfilePageComponent,
	],
	imports: [
		CommonModule,
		MatProgressSpinnerModule,
		ProfilePageRoutingModule,
		UserDetailsFormModule,
	],
})
export class ProfilePageModule { }
