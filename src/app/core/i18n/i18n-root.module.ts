import {
	ModuleWithProviders, NgModule, Optional, SkipSelf,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { i18nModuleConfig } from './i18n-module.config';
import { I18nService } from './i18n.service';
import { I18N_CONFIG, I18nConfig } from './i18n.config';
import { I18nLocaleIdProvider } from './i18n-localeId';

@NgModule({
	imports: [
		TranslateModule.forRoot(i18nModuleConfig),
	],
})
export class I18nRootModule {
	static forRoot(params: I18nConfig): ModuleWithProviders<I18nRootModule> {
		return {
			ngModule: I18nRootModule,
			providers: [
				I18nLocaleIdProvider,
				{
					provide: I18N_CONFIG,
					useValue: params,
				},
			],
		};
	}

	constructor(
		@Optional() @SkipSelf() parentModule: I18nRootModule,
		private i18nService: I18nService,
	) {
		if (parentModule) {
			throw new Error('I18nRootModule is already loaded. Import in your base AppModule only.');
		}
		this.i18nService.forRoot();
	}
}
