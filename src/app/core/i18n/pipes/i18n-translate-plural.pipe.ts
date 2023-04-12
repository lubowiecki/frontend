import { Pipe, PipeTransform } from '@angular/core';
import { I18nPluralPipeBase } from '@opi_pib/ngx-i18n';

import { TranslationKey } from '@translations/translation-key';

@Pipe({
	name: 'i18nPlural',
	standalone: true,
	pure: false,
})
export class I18nPluralPipe
	extends I18nPluralPipeBase<TranslationKey>
	implements PipeTransform {}
