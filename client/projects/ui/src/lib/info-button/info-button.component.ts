import { Component, Input } from '@angular/core';

import { IconName } from '../icon/icon.types';

@Component({
	selector: 'ui-info-button',
	templateUrl: './info-button.component.html',
	styleUrls: ['./info-button.component.scss']
})

export class InfoButtonComponent {
	@Input() public icon: IconName;
	@Input() public title: string;
}
