import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

type TranslationParams = Record<string, any>;

@Injectable({
	providedIn: 'root',
})
export abstract class I18nServiceBase<TranslationKey extends string, TranslationLanguage> {
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
}
