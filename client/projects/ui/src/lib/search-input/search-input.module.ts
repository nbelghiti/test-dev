import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { IconModule } from '../icon/icon.module';

import { SearchInputComponent } from './search-input.component';

@NgModule({
	imports: [
		CommonModule,
		IconModule,
		ReactiveFormsModule
	],
	declarations: [
		SearchInputComponent,
	],
	exports: [
		SearchInputComponent,
	],
})
export class SearchInputModule {}
