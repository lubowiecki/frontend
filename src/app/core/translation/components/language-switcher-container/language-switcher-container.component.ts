import {
	ChangeDetectionStrategy, Component,
} from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Translator } from '@core/translation/services/translator.service';
import { TranslationLanguage } from '@core/translation/value-objects/translation-language';

@Component({
	selector: 'app-language-switcher-container',
	templateUrl: './language-switcher-container.component.html',
	styleUrls: ['./language-switcher-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSwitcherContainerComponent {
	languageToSwitch$: Observable<TranslationLanguage>;

	constructor(private translator: Translator) {
		this.languageToSwitch$ = this.getLanguageToSwitch$();
	}

	onLanguageSelect(language: TranslationLanguage): void {
		this.translator.setLanguage(language);
	}

	private getLanguageToSwitch$(): Observable<TranslationLanguage> {
		return this.translator
			.getCurrentLanguage$()
			.pipe(map((currentLanguage) => currentLanguage.getLanguageToSwitch()));
	}
}
