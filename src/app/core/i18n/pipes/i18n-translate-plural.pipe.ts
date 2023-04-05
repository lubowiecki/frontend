import { Pipe, PipeTransform } from '@angular/core';

import { I18nTranslatePluralPipeBase } from '@core/ngx-i18n/pipes/i18n-translate-plural-base.pipe';
import { TranslationKey } from '@translations/translation-key';

@Pipe({
	name: 'i18nPlural',
	standalone: true,
	pure: false,
})
export class I18nTranslatePluralPipe extends I18nTranslatePluralPipeBase<TranslationKey> implements PipeTransform {}
