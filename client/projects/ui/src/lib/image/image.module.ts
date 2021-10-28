import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoaderModule } from '../loader/loader.module';

import { ImageComponent } from './image.component';

@NgModule({
	imports: [
		CommonModule,
		LoaderModule

	],
	declarations: [
		ImageComponent,
	],
	exports: [
		ImageComponent,
	],
})
export class ImageModule {}
