import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DIALOG_OVERLAY } from './dialog.conf';
import { OverlayComponent } from './overlay.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		OverlayComponent,
	],
	entryComponents: [
		OverlayComponent,
	],
	providers: [{
		provide: DIALOG_OVERLAY,
		useValue: OverlayComponent,
	}],
	exports: [
		OverlayComponent,
	],
})
export class DialogModule { }
