import { ChangeDetectionStrategy, Component } from '@angular/core';

import { DatesNativeComponent } from './components/dates-native/dates-native.component';
import { DatesWithTimeNativeComponent } from './components/dates-with-time-native/dates-with-time-native.component';
import { DatesWithTimeComponent } from './components/dates-with-time/dates-with-time.component';
import { DatesComponent } from './components/dates/dates.component';

@Component({
	selector: 'app-dates-page',
	templateUrl: './dates-page.component.html',
	styleUrls: ['./dates-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [
		DatesComponent,
		DatesNativeComponent,
		DatesWithTimeComponent,
		DatesWithTimeNativeComponent,
	],
})
export class DatesPageComponent {}
