import { Provider } from '@angular/core';
import { MatDatepickerIntl } from '@angular/material/datepicker';

import { CustomMatDatepickerIntl } from './datepicker-translation';
/**
 * Needs to be provided in all lazy loaded modules that use datepicker.
 *
 * angular issue:(https://github.com/angular/components/issues/18970)
 */
export const customMatDatepickerIntl: Provider = { provide: MatDatepickerIntl, useClass: CustomMatDatepickerIntl };
