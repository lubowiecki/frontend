import { Provider } from '@angular/core';
import { MatDatepickerIntl } from '@angular/material/datepicker';

import { MatDatepickerTranslator } from './datepicker-translator';

/**
 * Needs to be provided in all lazy loaded modules that use datepicker.
 *
 * angular issue:(https://github.com/angular/components/issues/18970)
 */
export const MatDatepickerIntlProvider: Provider = { provide: MatDatepickerIntl, useClass: MatDatepickerTranslator };
