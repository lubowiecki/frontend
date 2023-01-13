import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Paths } from '@core/navigation/models/paths';

@Component({
	selector: 'app-panel-page',
	templateUrl: './panel-page.component.html',
	styleUrls: ['./panel-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelPageComponent {
	paths = Paths;
}
