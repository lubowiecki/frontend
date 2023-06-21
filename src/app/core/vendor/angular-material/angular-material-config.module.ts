import { ModuleWithProviders, NgModule } from '@angular/core';

import { MatDatepickerConfigModule } from './datepicker/datepicker-config-module';

@NgModule({
	imports: [MatDatepickerConfigModule],
})
export class AngularMaterialConfigModule {
	static forRoot(): ModuleWithProviders<AngularMaterialConfigModule> {
		return {
			ngModule: AngularMaterialConfigModule,
		};
	}
}
