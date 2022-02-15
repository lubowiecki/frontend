import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { translationModuleConfig } from './config/translation-module.config';

@NgModule({
	imports: [TranslateModule.forChild(translationModuleConfig)],
	exports: [TranslateModule],
})
export class TranslationModule {}
