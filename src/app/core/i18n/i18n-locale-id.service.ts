import { DOCUMENT } from '@angular/common';
import {
	Inject, Injectable,
} from '@angular/core';

import { I18nService } from './i18n.service';

@Injectable({
	providedIn: 'root',
})
export class I18nLocaleIdService {
	constructor(
		@Inject(DOCUMENT) private document: Document,
		private i18nService: I18nService,
	) { }

	init(): void {
		this.i18nService.getCurrentLanguage$().subscribe((currentLanguage) => {
			this.document.documentElement.lang = currentLanguage.toDto();
		});
	}
}
