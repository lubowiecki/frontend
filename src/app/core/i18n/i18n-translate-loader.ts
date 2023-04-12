import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Provider } from '@angular/core';
import { TranslateLoader } from '@opi_pib/ngx-i18n';

import { TranslationLanguageEnum } from '@translations/translation-languages';

class I18nTranslateLoader implements TranslateLoader {
	getTranslation(lang: TranslationLanguageEnum): Observable<string> {
		return from(import(`./translations/${lang}.json`));
	}
}

export const I18nTranslateLoaderProvider: Provider = {
	provide: TranslateLoader,
	useClass: I18nTranslateLoader,
	deps: [HttpClient],
};
