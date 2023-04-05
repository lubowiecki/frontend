import { ChangeDetectorRef, Pipe, PipeTransform } from '@angular/core';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

@Pipe({
	name: 'translate',
	standalone: true,
	pure: false,
})
export class I18nTranslatePipeBase<TranslationKey extends string> extends TranslatePipe implements PipeTransform {
	constructor(translate: TranslateService, _ref: ChangeDetectorRef) {
		super(translate, _ref);
	}

	override transform(query: TranslationKey, ...args: unknown[]): string {
		return super.transform(query, ...args);
	}
}
