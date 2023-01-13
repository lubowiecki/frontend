import { Inject, Injectable } from '@angular/core';
import { TranslationParams } from '@opi_pib/node-translate/dist/models/translation-params';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { always, Maybe } from '@opi_pib/ts-utility';

import { TranslationKey } from '@translations/translation-key';

import { TRANSLATION_CONFIG } from '../config/translation-config';
import { TranslationConfig } from '../models/translation-config';
import { TranslationLanguage } from '../value-objects/translation-language';
import { isTranslationLanguageEnum, TranslationLanguageEnum } from '../models/translation-language-enum';

@Injectable({
	providedIn: 'root',
})
export class Translator {
	#langChange$: BehaviorSubject<TranslationLanguage>;

	constructor(
		private translateService: TranslateService,
		@Inject(TRANSLATION_CONFIG) private translationConfig: TranslationConfig,
	) { }

	init(): void {
		this.translateService.addLangs(this.translationConfig.availableLanguages);

		const initialLanguage: TranslationLanguage = this.getInitialLanguage();

		this.#langChange$ = new BehaviorSubject(initialLanguage);
		this.translateService.onLangChange.pipe(map(({ lang }) => {
			always(isTranslationLanguageEnum(lang), 'vkhipgca');

			return TranslationLanguage.create({ lang });
		})).subscribe(this.#langChange$);

		this.translateService.setDefaultLang(initialLanguage.toDto());
		this.translateService.use(initialLanguage.toDto());
	}

	translate$(key: TranslationKey, interpolateParams?: TranslationParams): Observable<string>;

	// eslint-disable-next-line no-dupe-class-members
	translate$(key: TranslationKey[], interpolateParams?: TranslationParams): Observable<{ [k in TranslationKey]: string }>;

	// eslint-disable-next-line no-dupe-class-members
	translate$(
		key: TranslationKey | TranslationKey[],
		interpolateParams?: TranslationParams,
	): Observable<string> | Observable<{ [k in TranslationKey]: string }> {
		return this.translateService.stream(key as string | string[], interpolateParams);
	}

	instant(key: TranslationKey, interpolateParams?: TranslationParams): string | any {
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

	private getInitialLanguage(): TranslationLanguage {
		const browserLanguage: Maybe<TranslationLanguage> = this.getBrowserLanguage();

		if (browserLanguage instanceof TranslationLanguage) {
			return browserLanguage;
		}

		return this.getDefaultLanguage();
	}

	private getDefaultLanguage(): TranslationLanguage {
		const lang: TranslationLanguageEnum = this.translationConfig.defaultLanguage;

		always(isTranslationLanguageEnum(lang), 'q38b0w3s');

		return TranslationLanguage.create({ lang });
	}

	private getBrowserLanguage(): Maybe<TranslationLanguage> {
		const browserLanguage = this.translateService.getBrowserLang();

		if (isTranslationLanguageEnum(browserLanguage)) {
			return TranslationLanguage.create({ lang: browserLanguage });
		}

		return null;
	}
}
