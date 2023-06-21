import { NgModule } from '@angular/core';
import {
	MatDatepickerIntl,
	MatDatepickerModule,
} from '@angular/material/datepicker';

import { MatDatepickerTranslator } from './datepicker-translator';

/**
 * Use this module instead of MatDatepickerModule because of bug:
 *
 * angular issue:(https://github.com/angular/components/issues/18970)
 */
@NgModule({
	imports: [MatDatepickerModule],
	exports: [MatDatepickerModule],
	providers: [
		{ provide: MatDatepickerIntl, useClass: MatDatepickerTranslator },
	],
})
export class MatDatepickerIntlModule {}
