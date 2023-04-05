import { InjectionToken } from '@angular/core';

import { I18nBaseConfig } from '@core/ngx-i18n/i18n-base.config';
import { TranslationLanguageEnum } from '@translations/translation-languages';

export type I18nConfig = I18nBaseConfig<TranslationLanguageEnum>;

export const I18N_CONFIG = new InjectionToken<I18nConfig>('i18n.config');
