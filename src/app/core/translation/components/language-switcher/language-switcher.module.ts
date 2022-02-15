import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TranslationModule } from 'src/app/core/translation/translation.module';

import { LanguageSwitcherComponent } from './language-switcher.component';

@NgModule({
	declarations: [LanguageSwitcherComponent],
	exports: [LanguageSwitcherComponent],
	imports: [CommonModule, MatButtonModule, TranslationModule],
})
export class LanguageSwitcherModule {}
