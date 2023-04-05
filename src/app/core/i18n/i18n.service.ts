import { Inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {
	BehaviorSubject, distinctUntilChanged, map, Observable, tap,
} from 'rxjs';
import { DOCUMENT } from '@angular/common';

import { TranslationKey } from '@translations/translation-key';
import { isTranslationLanguageEnum, TranslationLanguageEnum } from '@translations/translation-languages';
import { I18nServiceBase } from '@core/ngx-i18n/i18n.service.base';

import { TranslationLanguage } from './translation-language';
import { I18N_CONFIG, I18nConfig } from './i18n.config';

@Injectable({
	providedIn: 'root',
})
export class I18nService extends I18nServiceBase<TranslationKey, TranslationLanguageEnum, TranslationLanguage> {
	#langChange$: BehaviorSubject<TranslationLanguage>;

	constructor(
		protected override translateService: TranslateService,
		@Inject(DOCUMENT) protected document: Document,
		@Inject(I18N_CONFIG) protected config: I18nConfig,
	) {
		super(translateService);
	}

	forRoot(): void {
		this.registerLocales(this.config.localesToRegister);
		this.translateService.addLangs(this.config.languages);

		const initialLanguage: TranslationLanguage = this.#getInitialLanguage();

		this.translateService.setDefaultLang(initialLanguage.toDto());
		this.translateService.use(initialLanguage.toDto());
		this.#langChange$ = new BehaviorSubject(initialLanguage);

		this.translateService.onLangChange.pipe(
			map(({ lang }) => TranslationLanguage.create({ lang: lang as TranslationLanguageEnum })),
			tap((lang) => {
				this.document.documentElement.lang = lang.toDto();
			}),
		).subscribe(this.#langChange$);
	}

	getCurrentLanguage(): TranslationLanguage {
		return this.#langChange$.getValue();
	}

	getCurrentLanguage$(): Observable<TranslationLanguage> {
		return this.#langChange$.asObservable().pipe(distinctUntilChanged());
	}

	getAvailableLanguages(): TranslationLanguage[] {
		return this.translateService.getLangs().map((lang) => TranslationLanguage.create({ lang: lang as TranslationLanguageEnum }));
	}

	#getInitialLanguage(): TranslationLanguage {
		const browserLanguage = this.translateService.getBrowserLang();

		if (isTranslationLanguageEnum(browserLanguage)) {
			return TranslationLanguage.create({ lang: browserLanguage });
		}

		return this.#getDefaultLanguage();
	}

	#getDefaultLanguage(): TranslationLanguage {
		return this.getAvailableLanguages()[0];
	}
}
