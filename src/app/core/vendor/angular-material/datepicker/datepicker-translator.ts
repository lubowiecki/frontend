import { Injectable } from '@angular/core';
import { MatDatepickerIntl } from '@angular/material/datepicker';

import { I18nService } from '@core/i18n';

@Injectable({ providedIn: 'root' })
export class MatDatepickerTranslator extends MatDatepickerIntl {
	constructor(private i18nService: I18nService) {
		super();

		this.i18nService.getCurrentLanguage$().subscribe(() => {
			this.#translate();
		});
	}

	#translate(): void {
		this.calendarLabel = this.i18nService.instant('datepicker.calendarLabel');
		this.openCalendarLabel = this.i18nService.instant('datepicker.openCalendarLabel');
		this.prevMonthLabel = this.i18nService.instant('datepicker.prevMonthLabel');
		this.nextMonthLabel = this.i18nService.instant('datepicker.nextMonthLabel');
		this.prevYearLabel = this.i18nService.instant('datepicker.prevYearLabel');
		this.nextYearLabel = this.i18nService.instant('datepicker.nextYearLabel');
		this.prevMultiYearLabel = this.i18nService.instant('datepicker.prevMultiYearLabel');
		this.nextMultiYearLabel = this.i18nService.instant('datepicker.nextMultiYearLabel');
		this.switchToMonthViewLabel = this.i18nService.instant('datepicker.switchToMonthViewLabel');
		this.switchToMultiYearViewLabel = this.i18nService.instant('datepicker.switchToMultiYearViewLabel');

		this.changes.next();
	}
}
