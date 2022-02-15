import {
	ChangeDetectionStrategy, Component, EventEmitter, Input, Output,
} from '@angular/core';
import { Maybe } from '@lubowiecki/ts-utility';

import { TranslationLanguage } from '@core/translation/value-objects/translation-language';

@Component({
	selector: 'app-language-switcher',
	templateUrl: './language-switcher.component.html',
	styleUrls: ['./language-switcher.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSwitcherComponent {
	@Input() languageToSwitch: Maybe<TranslationLanguage>;

	@Output() languageSelect = new EventEmitter<TranslationLanguage>();

	onLanguageSelect(language: Maybe<TranslationLanguage>): void {
		if (language instanceof TranslationLanguage) {
			this.languageSelect.emit(language);
		}
	}
}
