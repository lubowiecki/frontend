import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';

import { I18nService } from '@core/i18n';

import { TranslationLanguage } from '../../translation-language';
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
	otherLanguages$: Observable<TranslationLanguage[]>;

	constructor(private i18nService: I18nService) {
		this.otherLanguages$ = this.#getOtherLanguages$();
	}

	#getOtherLanguages$(): Observable<TranslationLanguage[]> {
		return this.i18nService
			.getCurrentLanguage$()
			.pipe(
				map((currentLang) =>
					this.i18nService
						.getAvailableLanguages()
						.filter((lang) => !lang.equals(currentLang))
				)
			);
	}

	protected onLanguageSelect(language: TranslationLanguage): void {
		this.i18nService.setLanguage(language);
	}
}
