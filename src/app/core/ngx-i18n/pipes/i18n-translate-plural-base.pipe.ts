import { I18nPluralPipe, NgLocalization } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'translatePlural',
	standalone: true,
	pure: false,
})
export class I18nTranslatePluralPipeBase<TranslationKey extends string> extends I18nPluralPipe implements PipeTransform {
	constructor(
		localization: NgLocalization,
	) {
		super(localization);
	}

	override transform(value: number | null | undefined, pluralMap: {
        [count: string]: TranslationKey;
    }, locale?: string): TranslationKey {
		return super.transform(value, pluralMap, locale) as TranslationKey;
	}
}
