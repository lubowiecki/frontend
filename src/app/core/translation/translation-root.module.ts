import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { translationConfig, TRANSLATION_CONFIG } from './config/translation-config';
import { translationModuleConfig } from './config/translation-module.config';
import { PageLanguageController } from './services/page-language-controller.service';
import { Translator } from './services/translator.service';

@NgModule({
	imports: [
		TranslateModule.forRoot(translationModuleConfig),
	],
	exports: [TranslateModule],
	providers: [{ provide: TRANSLATION_CONFIG, useValue: translationConfig }],
})
export class TranslationRootModule {
	constructor(private translationController: Translator, private pageLanguageController: PageLanguageController) {
		this.translationController.init();
		this.pageLanguageController.init();
	}
}
