import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ImageModule } from '../image/image.module';

import { CardComponent } from './card.component';
import { CardActionDirective } from './card.directive';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		ImageModule,
	],
	declarations: [
		CardComponent,
		CardActionDirective,
	],
	exports: [
		CardComponent,
		CardActionDirective,
	],
})
export class CardModule {}
