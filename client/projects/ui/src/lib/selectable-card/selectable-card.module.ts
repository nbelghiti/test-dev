import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ImageModule } from '../image/image.module';

import { SelectableCardComponent } from './selectable-card.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		ReactiveFormsModule,
		ImageModule,
	],
	declarations: [
		SelectableCardComponent,
	],
	exports: [
		SelectableCardComponent,
	],
})
export class SelectableCardModule {}
