import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ApiModule } from '@api/rest/api.module';
import { TranslationRootModule } from '@core/translation/translation-root.module';
import { AngularMaterialConfigModule } from '@core/vendor/angular-material/angular-material-config.module';
import { environment } from '@environment';

import { RootComponent } from './root/root.component';
import { RootModule } from './root/root.module';

@NgModule({
	declarations: [],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		TranslationRootModule,
		AngularMaterialConfigModule.forRoot(),
		ApiModule.forRoot({
			rootUrl: environment.restUri,
		}),
		RootModule,
	],
	bootstrap: [RootComponent],
})
export class AppModule { }
