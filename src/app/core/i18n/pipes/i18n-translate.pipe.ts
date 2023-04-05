import { Pipe, PipeTransform } from '@angular/core';

import { I18nTranslatePipeBase } from '@core/ngx-i18n/pipes/i18n-translate-base.pipe';
import { TranslationKey } from '@translations/translation-key';

@Pipe({
	name: 'translate',
	standalone: true,
	pure: false,
})
export class I18nTranslatePipe extends I18nTranslatePipeBase<TranslationKey> implements PipeTransform { }
