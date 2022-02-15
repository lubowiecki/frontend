import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LanguageSwitcherModule } from '../language-switcher/language-switcher.module';
import { LanguageSwitcherContainerComponent } from './language-switcher-container.component';

@NgModule({
	declarations: [LanguageSwitcherContainerComponent],
	exports: [LanguageSwitcherContainerComponent],
	imports: [CommonModule, LanguageSwitcherModule],
})
export class LanguageSwitcherContainerModule {}
