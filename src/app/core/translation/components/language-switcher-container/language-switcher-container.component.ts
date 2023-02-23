import {
	ChangeDetectionStrategy, Component,
} from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

import { Translator } from '../../services/translator.service';
import { TranslationLanguage } from '../../value-objects/translation-language';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';

@Component({
	selector: 'app-language-switcher-container',
	templateUrl: './language-switcher-container.component.html',
	styleUrls: ['./language-switcher-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [CommonModule, LanguageSwitcherComponent],
})
export class LanguageSwitcherContainerComponent {
	protected languageToSelect$: Observable<TranslationLanguage>;

	constructor(private translator: Translator) {
		this.languageToSelect$ = this.#getLanguageToSelect$();
	}

	protected onLanguageSelect(language: TranslationLanguage): void {
		this.translator.setLanguage(language);
	}

	#getLanguageToSelect$(): Observable<TranslationLanguage> {
		return this.translator
			.getCurrentLanguage$()
			.pipe(map((currentLanguage) => currentLanguage.getLanguageToSelect()));
	}
}
