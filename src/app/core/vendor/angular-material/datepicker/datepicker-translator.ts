import { Injectable } from '@angular/core';
import { MatDatepickerIntl } from '@angular/material/datepicker';

import { Translator } from '@core/translation';

@Injectable({ providedIn: 'root' })
export class MatDatepickerTranslator extends MatDatepickerIntl {
	constructor(private translator: Translator) {
		super();

		this.translator.getCurrentLanguage$().subscribe(() => {
			this.#translate();
		});
	}

	#translate(): void {
		this.calendarLabel = this.translator.instant('datepicker.calendarLabel');
		this.openCalendarLabel = this.translator.instant('datepicker.openCalendarLabel');
		this.prevMonthLabel = this.translator.instant('datepicker.prevMonthLabel');
		this.nextMonthLabel = this.translator.instant('datepicker.nextMonthLabel');
		this.prevYearLabel = this.translator.instant('datepicker.prevYearLabel');
		this.nextYearLabel = this.translator.instant('datepicker.nextYearLabel');
		this.prevMultiYearLabel = this.translator.instant('datepicker.prevMultiYearLabel');
		this.nextMultiYearLabel = this.translator.instant('datepicker.nextMultiYearLabel');
		this.switchToMonthViewLabel = this.translator.instant('datepicker.switchToMonthViewLabel');
		this.switchToMultiYearViewLabel = this.translator.instant('datepicker.switchToMultiYearViewLabel');

		this.changes.next();
	}
}
