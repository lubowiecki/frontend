import { ChangeDetectorRef, Pipe, PipeTransform } from '@angular/core';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';
import { Is, Maybe } from '@opi_pib/ts-utility';

import { TranslationKey } from '@translations/translation-key';

type NgxTranslatePipeWithoutTransform = new (
	translate: TranslateService,
	_ref: ChangeDetectorRef
) => {
	[P in Exclude<keyof TranslatePipe, 'transform'>]: TranslatePipe[P];
} & { transform(query: Maybe<TranslationKey>, ...args: unknown[]): string }; // TODO translationKey import

const NgxTranslatePipeWithoutTransformClass = TranslatePipe as NgxTranslatePipeWithoutTransform;

@Pipe({
	name: 'translate',
	standalone: true,
	pure: false,
})
export class I18nTranslatePipe extends NgxTranslatePipeWithoutTransformClass implements PipeTransform {
	constructor(translate: TranslateService, _ref: ChangeDetectorRef) {
		super(translate, _ref);
	}

	override transform(query: Maybe<TranslationKey>, ...args: unknown[]): string {
		if (Is.string(query)) {
			return super.transform(query, ...args);
		}
		return '';
	}
}
