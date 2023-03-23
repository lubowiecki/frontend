import { TranslateLoader } from '@ngx-translate/core';
import { from, Observable } from 'rxjs';

import { TranslationLanguageEnum } from '@translations/translation-languages';

export class LazyTranslateLoader implements TranslateLoader {
	getTranslation(lang: TranslationLanguageEnum): Observable<string> {
		return from(import(`../translations/${lang}.json`));
	}
}
