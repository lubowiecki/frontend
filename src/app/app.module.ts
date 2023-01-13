import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TranslationRootModule } from '@core/translation/translation-root.module';
import { AngularMaterialConfigModule } from '@core/vendor/angular-material-config/angular-material-config.module';

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
		RootModule,
	],
	providers: [],
	bootstrap: [RootComponent],
})
export class AppModule { }
