import { Component, HostBinding, Input } from '@angular/core';

import { IBreadcrumbItem } from '../../breadcrumb/breadcrumb.types';
import { IStep } from '../../steps/steps.types';

@Component({
	selector: 'ui-wizard-layout',
	templateUrl: './wizard-layout.component.html',
	styleUrls: [
		'./wizard-layout.component.scss',
	],
})
export class WizardLayoutComponent {
	@HostBinding('class') class = 'l-step-wizard';
	@HostBinding('class.l-wizard--cover')
	get isCover(): boolean {
		return this.isFullScreen;
	}

	@Input() public activeIndex: number;
	@Input() public breadcrumb: IBreadcrumbItem[] = [];
	@Input() public hideFooter: boolean = false;
	@Input() public showSteps: boolean = false;
	@Input() public standalone: boolean = false;
	@Input() public withPadding: boolean = true;
	@Input() public isFullScreen: boolean = false;
	@Input() public steps: IStep[];
}
