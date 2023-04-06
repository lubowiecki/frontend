import { Pipe, PipeTransform } from '@angular/core';

import { I18nPluralPipeBase } from '@core/ngx-i18n/pipes';
import { TranslationKey } from '@translations/translation-key';

@Pipe({
	name: 'i18nPlural',
	standalone: true,
	pure: false,
})
export class I18nPluralPipe extends I18nPluralPipeBase<TranslationKey> implements PipeTransform {}
