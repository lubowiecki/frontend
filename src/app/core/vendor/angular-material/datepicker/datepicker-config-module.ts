import { NgModule } from '@angular/core';
import { LuxonDateAdapter, MatLuxonDateModule, MAT_LUXON_DATE_ADAPTER_OPTIONS } from '@angular/material-luxon-adapter';
import { DateAdapter } from '@angular/material/core';

import { Translator } from '@core/translation';

@NgModule({
	imports: [MatLuxonDateModule],
	providers: [
		{
			provide: MAT_LUXON_DATE_ADAPTER_OPTIONS,
			useValue: {
				firstDayOfWeek: 1,
			},
		},
	],
})
export class MatDatepickerConfigModule {
	constructor(private translator: Translator, private dateAdapter: DateAdapter<LuxonDateAdapter>) {
		this.translator.getCurrentLanguage$().subscribe((lang) => {
			this.dateAdapter.setLocale(lang.toDto());
		});
	}
}
