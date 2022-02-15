import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslationRootModule } from 'src/app/core/translation/translation-root.module';
import { AngularMaterialConfigModule } from 'src/app/core/vendor/angular-material-config/angular-material-config.module';

import { RootModule } from './root/root.module';
import { RootComponent } from './root/root.component';

@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		TranslationRootModule,
		AngularMaterialConfigModule.forRoot(),
		RootModule,
	],
	bootstrap: [RootComponent],
})
export class AppModule { }
