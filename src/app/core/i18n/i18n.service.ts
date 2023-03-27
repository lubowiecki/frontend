import { Inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationParams } from '@opi_pib/node-translate/dist/models/translation-params';
import { always, Maybe } from '@opi_pib/ts-utility';
import {
	BehaviorSubject, distinctUntilChanged, map, Observable, tap,
} from 'rxjs';
import { DOCUMENT } from '@angular/common';

import { TranslationKey } from '@translations/translation-key';
import { isTranslationLanguageEnum, languages, TranslationLanguageEnum } from '@translations/translation-languages';

import { TranslationLanguage } from './value-objects/translation-language';

@Injectable({
	providedIn: 'root',
})
export class I18nService {
	#langChange$: BehaviorSubject<TranslationLanguage>;

	constructor(
		@Inject(DOCUMENT) private document: Document,
		private translateService: TranslateService,
	) { }

	forRoot(): void {
		this.translateService.addLangs(languages);

		const initialLanguage: TranslationLanguage = this.#getInitialLanguage();

		this.translateService.setDefaultLang(initialLanguage.toDto());
		this.translateService.use(initialLanguage.toDto());
		this.#langChange$ = new BehaviorSubject(initialLanguage);

		this.translateService.onLangChange.pipe(
			map(({ lang }) => {
				always(isTranslationLanguageEnum(lang), 'vkhipgca');

				return TranslationLanguage.create({ lang });
			}),
			tap((lang) => {
				this.document.documentElement.lang = lang.toDto();
			}),
		).subscribe(this.#langChange$);
	}

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

	getCurrentLanguage(): TranslationLanguage {
		const { currentLang } = this.translateService;

		always(isTranslationLanguageEnum(currentLang), 'c252o4k2');

		return TranslationLanguage.create({ lang: currentLang });
	}

	getCurrentLanguage$(): Observable<TranslationLanguage> {
		return this.#langChange$.asObservable().pipe(distinctUntilChanged());
	}

	getAvailableLanguages(): TranslationLanguage[] {
		return languages.map((lang) => TranslationLanguage.create({ lang }));
	}

	#getInitialLanguage(): TranslationLanguage {
		const browserLanguage: Maybe<TranslationLanguage> = this.#getBrowserLanguage();

		if (browserLanguage instanceof TranslationLanguage) {
			return browserLanguage;
		}

		return this.#getDefaultLanguage();
	}

	#getDefaultLanguage(): TranslationLanguage {
		const lang: TranslationLanguageEnum = languages[0];

		always(isTranslationLanguageEnum(lang), 'q38b0w3s');

		return TranslationLanguage.create({ lang });
	}

	#getBrowserLanguage(): Maybe<TranslationLanguage> {
		const browserLanguage = this.translateService.getBrowserLang();

		if (isTranslationLanguageEnum(browserLanguage)) {
			return TranslationLanguage.create({ lang: browserLanguage });
		}

		return null;
	}
}
