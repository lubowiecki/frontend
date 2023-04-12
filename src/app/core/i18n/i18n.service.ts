import { Inject, Injectable } from '@angular/core';
import {
	BehaviorSubject,
	distinctUntilChanged,
	map,
	Observable,
	tap,
} from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { always } from '@opi_pib/ts-utility';
import { I18nServiceBase, TranslateService } from '@opi_pib/ngx-i18n';

import { TranslationKey } from '@translations/translation-key';
import {
	isTranslationLanguageEnum,
	TranslationLanguageEnum,
} from '@translations/translation-languages';

import { TranslationLanguage } from './translation-language';
import { I18N_CONFIG, I18nConfig } from './i18n.config';

@Injectable({
	providedIn: 'root',
})
export class I18nService extends I18nServiceBase<
	TranslationKey,
	TranslationLanguageEnum,
	TranslationLanguage
> {
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

		this.translateService.onLangChange
			.pipe(
				map(({ lang }) => {
					always(isTranslationLanguageEnum(lang), 'u9um8kqu');

					return TranslationLanguage.create({ lang });
				}),
				tap((lang) => {
					this.document.documentElement.lang = lang.toDto();
				}),
			)
			.subscribe(this.#langChange$);
	}

	getCurrentLanguage(): TranslationLanguage {
		return this.#langChange$.getValue();
	}

	getCurrentLanguage$(): Observable<TranslationLanguage> {
		return this.#langChange$.asObservable().pipe(distinctUntilChanged());
	}

	getAvailableLanguages(): TranslationLanguage[] {
		return this.translateService.getLangs().map((lang) => {
			always(isTranslationLanguageEnum(lang), '5bpriqmx');

			return TranslationLanguage.create({ lang });
		});
	}

	#getInitialLanguage(): TranslationLanguage {
		const browserLanguage = this.translateService.getBrowserLang();

		if (isTranslationLanguageEnum(browserLanguage)) {
			return TranslationLanguage.create({ lang: browserLanguage });
		}

		return this.getAvailableLanguages()[0];
	}
}
