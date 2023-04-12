import { InjectionToken } from '@angular/core';
import { I18nBaseConfig } from '@opi_pib/ngx-i18n';

import { TranslationLanguageEnum } from '@translations/translation-languages';

export type I18nConfig = I18nBaseConfig<TranslationLanguageEnum>;

export const I18N_CONFIG = new InjectionToken<I18nConfig>('i18n.config');
