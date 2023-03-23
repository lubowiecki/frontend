import { DOCUMENT } from '@angular/common';
import {
	ApplicationRef, Inject, Injectable,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { I18nService } from './i18n.service';

@Injectable({
	providedIn: 'root',
})
export class I18nLocaleIdService {
	#initialized = false;

	constructor(
		private appRef: ApplicationRef,
		@Inject(DOCUMENT) private document: Document,
		private i18nService: I18nService,
		private router: Router,
		private route: ActivatedRoute,
	) { }

	init(): void {
		if (this.#initialized === false) {
			this.#initialized = true;
			this.#bindToCurrentLanguage();
		}
	}

	#bindToCurrentLanguage(): void {
		this.i18nService.getCurrentLanguage$().subscribe((currentLanguage) => {
			this.document.documentElement.lang = currentLanguage.toDto();
		});
	}
}
