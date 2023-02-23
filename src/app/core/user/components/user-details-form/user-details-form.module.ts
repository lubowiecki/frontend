import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { TranslationModule } from '@core/translation';

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
		MatDatepickerModule,
		TranslationModule,
	],
})
export class UserDetailsFormModule { }
