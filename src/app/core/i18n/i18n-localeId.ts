import { I18nService } from './i18n.service';

export class I18nLocaleId extends String {
	constructor(private i18nService: I18nService) {
		super();
	}

	override toString(): string {
		return this.i18nService.getCurrentLanguage().toDto();
	}
}
