import { NgModule } from '@angular/core';
import {
	LuxonDateAdapter,
	MatLuxonDateAdapterOptions,
	MatLuxonDateModule,
	MAT_LUXON_DATE_ADAPTER_OPTIONS,
} from '@angular/material-luxon-adapter';
import { DateAdapter } from '@angular/material/core';

import { I18nService } from '@core/i18n';

const options: MatLuxonDateAdapterOptions = {
	firstDayOfWeek: 1,
	useUtc: false,
};

@NgModule({
	imports: [MatLuxonDateModule],
	providers: [
		{
			provide: MAT_LUXON_DATE_ADAPTER_OPTIONS,
			useValue: options,
		},
	],
})
export class MatDatepickerConfigModule {
	constructor(
		private i18nService: I18nService,
		private dateAdapter: DateAdapter<LuxonDateAdapter>
	) {
		this.i18nService.getCurrentLanguage$().subscribe((lang) => {
			this.dateAdapter.setLocale(lang.toDto());
		});
	}
}
