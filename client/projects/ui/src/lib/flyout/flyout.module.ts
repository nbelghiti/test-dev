import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FlyoutContentDirective } from './flyout-content.directive';
import { FlyoutFocusDirective } from './flyout-focus.directive';
import { FlyoutToggleDirective } from './flyout-toggle.directive';
import { FlyoutDirective } from './flyout.directive';

@NgModule({
	imports: [CommonModule],
	declarations: [
		FlyoutDirective,
		FlyoutContentDirective,
		FlyoutToggleDirective,
		FlyoutFocusDirective,
	],
	exports: [FlyoutDirective, FlyoutContentDirective, FlyoutToggleDirective, FlyoutFocusDirective, ]
})
export class FlyoutModule { }
