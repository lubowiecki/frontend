import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { I18nService } from '@core/i18n';

import { IsoDateWithTime } from '../value-objects/iso-date-with-time';

@Injectable({
	providedIn: 'root',
})
export class DateWithTimeService {
	constructor(private i18nService: I18nService) { }

	getRelativeDate$(date$: Observable<IsoDateWithTime>) {
		return combineLatest([
			this.i18nService.getCurrentLanguage$(),
			date$,
		]).pipe(
			map(([lang, date]) => date.formatRelative(lang)),
		);
	}
}
