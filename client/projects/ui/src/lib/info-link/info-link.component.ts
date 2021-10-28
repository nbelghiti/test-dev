import { Component, Input } from '@angular/core';

import { IconName } from '../icon/icon.types';

@Component({
	selector: 'ui-info-link',
	templateUrl: './info-link.component.html',
	styleUrls: ['./info-link.component.scss']
})

export class InfoLinkComponent {
	@Input() public icon: IconName;
	@Input() public title: string;
	@Input() public link?: string;
	@Input() public grey?: boolean = false;
	@Input() public red?: boolean = false;
	@Input() public arrow?: boolean = true;
}
