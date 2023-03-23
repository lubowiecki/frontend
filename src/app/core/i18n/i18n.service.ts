import { Inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationParams } from '@opi_pib/node-translate/dist/models/translation-params';
import { always, Maybe } from '@opi_pib/ts-utility';
import {
	BehaviorSubject, distinctUntilChanged, map, Observable,
} from 'rxjs';

import { TranslationKey } from '@translations/translation-key';
import { languages, TranslationLanguageEnum } from '@translations/translation-languages';

import { I18nConfig, I18N_CONFIG } from './i18n.config';
import { isTranslationLanguageEnum } from './is-translation-language-enum';
import { TranslationLanguage } from './value-objects/translation-language';

@Injectable({
	providedIn: 'root',
})
export class I18nService {
	#langChange$: BehaviorSubject<TranslationLanguage>;

	constructor(
		private translateService: TranslateService,
		@Inject(I18N_CONFIG) private config: I18nConfig,
	) { }

	init(): void {
		this.translateService.addLangs(languages);

		const initialLanguage: TranslationLanguage = this.#getInitialLanguage();

		this.#langChange$ = new BehaviorSubject(initialLanguage);
		this.translateService.onLangChange.pipe(map(({ lang }) => {
			always(isTranslationLanguageEnum(lang), 'vkhipgca');

			return TranslationLanguage.create({ lang });
		})).subscribe(this.#langChange$);

		this.translateService.setDefaultLang(initialLanguage.toDto());
		this.translateService.use(initialLanguage.toDto());
	}

	translate$(key: TranslationKey, interpolateParams?: TranslationParams): Observable<string>;

	translate$(key: TranslationKey[], interpolateParams?: TranslationParams): Observable<{ [k in TranslationKey]: string }>;

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

	#getInitialLanguage(): TranslationLanguage {
		const browserLanguage: Maybe<TranslationLanguage> = this.#getBrowserLanguage();

		if (browserLanguage instanceof TranslationLanguage) {
			return browserLanguage;
		}

		return this.#getDefaultLanguage();
	}

	#getDefaultLanguage(): TranslationLanguage {
		const lang: TranslationLanguageEnum = this.config.defaultLanguage;

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
