import { NgModule } from '@angular/core';
import {
	DateAdapter, MatNativeDateModule, MAT_NATIVE_DATE_FORMATS, NativeDateAdapter,
} from '@angular/material/core';

import { Translator } from '@core/translation/services/translator.service';

import { datepickerDateFormats } from './datepicker-date-formats';
import { customMatDatepickerIntl } from './datepicker-intl-provider';

@NgModule({
	imports: [MatNativeDateModule],
	providers: [
		{ provide: DateAdapter, useClass: NativeDateAdapter },
		{ provide: MAT_NATIVE_DATE_FORMATS, useValue: datepickerDateFormats },
		customMatDatepickerIntl,
	],
})
export class MatDatepickerConfigModule {
	constructor(private translator: Translator, private dateAdapter: DateAdapter<NativeDateAdapter>) {
		this.translator.getCurrentLanguage$().subscribe((lang) => {
			this.dateAdapter.setLocale(lang.toDto());
		});
	}
}
