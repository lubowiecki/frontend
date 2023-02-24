import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

import { TranslationModule } from '@core/translation';
import { MatDatepickerIntlModule } from '@core/vendor/angular-material';

import { UserDetailsFormComponent } from './user-details-form.component';

@NgModule({
	declarations: [
		UserDetailsFormComponent,
	],
	exports: [
		UserDetailsFormComponent,
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatDatepickerIntlModule,
		TranslationModule,
	],
})
export class UserDetailsFormModule { }
