import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

import { Translator } from './translator.service';

@Injectable({
	providedIn: 'root',
})
export class PageLanguageController {
	private initialized: boolean;

	constructor(private translator: Translator, @Inject(DOCUMENT) private document: Document) {
		this.initialized = false;
	}

	init(): void {
		if (this.initialized === false) {
			this.initialized = true;
			this.bindToCurrentLanguage();
		}
	}

	private bindToCurrentLanguage(): void {
		this.translator.getCurrentLanguage$().subscribe((currentLanguage) => {
			this.document.documentElement.lang = currentLanguage.toDto();
		});
	}
}
