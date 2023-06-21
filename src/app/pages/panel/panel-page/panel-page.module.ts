import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { I18nModule } from '@core/i18n';

import { PanelPageRoutingModule } from './panel-page-routing.module';
import { PanelPageComponent } from './panel-page.component';

@NgModule({
	declarations: [PanelPageComponent],
	imports: [CommonModule, PanelPageRoutingModule, I18nModule],
	exports: [PanelPageComponent],
})
export default class PanelPageModule {}
