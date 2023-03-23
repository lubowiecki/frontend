import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ApiModule } from '@api/rest/api.module';
import { I18nRootModule } from '@core/i18n';
import { I18N_CONFIG } from '@core/i18n/i18n.config';
import { AngularMaterialConfigModule } from '@core/vendor/angular-material/angular-material-config.module';
import { environment } from '@environment';
import { TranslationLanguageEnum } from '@translations/translation-languages';

import { RootComponent } from './root/root.component';
import { RootModule } from './root/root.module';

@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		I18nRootModule,
		AngularMaterialConfigModule.forRoot(),
		ApiModule.forRoot({
			rootUrl: environment.restUri,
		}),
		RootModule,
	],
	providers: [
		{
			provide: I18N_CONFIG,
			useValue: {
				defaultLanguage: TranslationLanguageEnum.Pl,
			},
		},
	],
	bootstrap: [RootComponent],
})
export class AppModule { }
