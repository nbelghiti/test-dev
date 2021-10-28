import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StepItemComponent } from './step-item/step-item.component';
import { StepsComponent } from './steps.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule
	],
	declarations: [
		StepItemComponent,
		StepsComponent,
	],
	exports: [
		StepItemComponent,
		StepsComponent,
	],
})
export class StepsModule {}
