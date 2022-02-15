import { MatDateFormats } from '@angular/material/core';

export const datepickerDateFormats: MatDateFormats = {
	parse: {
		dateInput: ['D.MM.YYYY', 'DD.MM.YYYY', 'D.M.YYYY', 'DD.M.YYYY'],
	},
	display: {
		dateInput: 'DD.MM.YYYY',
		monthYearLabel: 'MMM YYYY',
		dateA11yLabel: 'LL',
		monthYearA11yLabel: 'MMMM YYYY',
	},
};
