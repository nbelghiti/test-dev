import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonModule } from '../button/button.module';
import { IconModule } from '../icon/icon.module';

import { AccordionComponent } from './controller/accordion.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { ExpansionPanelActionDirective } from './expansion-panel/expansion-panel.directive';


@NgModule({
	imports: [
		CommonModule,
		IconModule,
		ButtonModule,
	],
	declarations: [
		ExpansionPanelActionDirective,
		ExpansionPanelComponent,
		AccordionComponent,
	],
	exports: [
		ExpansionPanelActionDirective,
		ExpansionPanelComponent,
		AccordionComponent,
	],
})
export class AccordionModule {}
