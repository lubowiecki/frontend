import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import pl from '@angular/common/locales/pl';

import { ApiModule } from '@api/rest/api.module';
import { I18nRootModule } from '@core/i18n';
import { AngularMaterialConfigModule } from '@core/vendor/angular-material/angular-material-config.module';
import { environment } from '@environment';
import { languages } from '@translations/translation-languages';

import { RootComponent } from './root/root.component';
import { RootModule } from './root/root.module';

@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		ApiModule.forRoot({
			rootUrl: environment.restUri,
		}),
		I18nRootModule.forRoot({
			logMissingTranslations: !environment.production,
			languages,
			localesToRegister: [pl],
		}),
		AngularMaterialConfigModule.forRoot(),
		RootModule,
	],
	bootstrap: [RootComponent],
})
export class AppModule {}
