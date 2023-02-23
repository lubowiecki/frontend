import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Translator } from '@core/translation';

import { IsoDateWithTime } from '../value-objects/iso-date-with-time';

@Injectable({
	providedIn: 'root',
})
export class DateWithTimeService {
	constructor(private translator: Translator) { }

	getRelativeDate$(date$: Observable<IsoDateWithTime>) {
		return combineLatest([
			this.translator.getCurrentLanguage$(),
			date$,
		]).pipe(
			map(([lang, date]) => date.formatRelative(lang)),
		);
	}
}
