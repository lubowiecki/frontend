import {
	ChangeDetectionStrategy, Component, EventEmitter, Input, Output,
} from '@angular/core';
import { Maybe } from '@opi_pib/ts-utility';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { TranslationModule } from '../../translation.module';
import { TranslationLanguage } from '../../value-objects/translation-language';

@Component({
	selector: 'app-language-switcher',
	templateUrl: './language-switcher.component.html',
	styleUrls: ['./language-switcher.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [CommonModule, MatButtonModule, TranslationModule],
})
export class LanguageSwitcherComponent {
	@Input() select: Maybe<TranslationLanguage>;

	@Output() selected = new EventEmitter<TranslationLanguage>();

	protected onSelect(language: Maybe<TranslationLanguage>): void {
		if (language instanceof TranslationLanguage) {
			this.selected.emit(language);
		}
	}
}
