import { TranslateLoader } from '@ngx-translate/core';
import { from, Observable } from 'rxjs';
import { Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TranslationLanguageEnum } from '@translations/translation-languages';
import { I18N_CONFIG } from '@core/i18n/i18n.config';

export class I18nTranslateLoader implements TranslateLoader {
	constructor(private http: HttpClient, private injector: Injector) { }

	getTranslation(lang: TranslationLanguageEnum): Observable<string> {
		const config = this.injector.get(I18N_CONFIG);
		return from(import(`${config.pathToTranslationsFolder}/${lang}.json`));
	}
}
