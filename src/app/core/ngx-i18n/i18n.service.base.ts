import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { registerLocaleData } from '@angular/common';

import { TranslationParams } from './translation-params';
import { TranslationLanguageBase } from './translation-language-base';

@Injectable({
	providedIn: 'root',
})
export abstract class I18nServiceBase<
		TranslationKey extends string,
		TranslationLanguageEnum extends string,
		TranslationLanguage extends TranslationLanguageBase<TranslationLanguageEnum, TranslationKey>
	> {
	constructor(
		protected translateService: TranslateService,
	) { }

	abstract getCurrentLanguage(): TranslationLanguage;

	translate$(
		key: TranslationKey,
		interpolateParams?: TranslationParams
	): Observable<string>;

	translate$(
		key: TranslationKey[],
		interpolateParams?: TranslationParams
	): Observable<{ [k in TranslationKey]: string }>;

	translate$(
		key: TranslationKey | TranslationKey[],
		interpolateParams?: TranslationParams,
	): Observable<string> | Observable<{ [k in TranslationKey]: string }> {
		return this.translateService.stream(key, interpolateParams);
	}

	instant(key: TranslationKey, interpolateParams?: TranslationParams): string {
		return this.translateService.instant(key, interpolateParams);
	}

	setLanguage(lang: TranslationLanguage): void {
		this.translateService.use(lang.toDto());
	}

	protected registerLocales(locales: any[] = []): void {
		locales.forEach((locale) => registerLocaleData(locale));
	}
}
