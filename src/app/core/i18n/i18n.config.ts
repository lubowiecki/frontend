import { InjectionToken } from '@angular/core';

import { I18nConfigBase } from '@core/ngx-translate/i18n.config';
import { TranslationLanguageEnum } from '@translations/translation-languages';

export type I18nConfig = I18nConfigBase<TranslationLanguageEnum>;

export const I18N_CONFIG = new InjectionToken<I18nConfig>('i18n.config');
