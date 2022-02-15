import { TranslateLoader } from '@ngx-translate/core';
import { from, Observable } from 'rxjs';

import { TranslationLanguageEnum } from '../models/translation-language-enum';

export class LazyTranslateLoader implements TranslateLoader {
	getTranslation(lang: TranslationLanguageEnum): Observable<any> {
		return from(import(`../i18n/${lang}.json`));
	}
}
