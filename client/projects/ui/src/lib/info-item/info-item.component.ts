import { Component, Input } from '@angular/core';

import { IconName } from '../icon/icon.types';

@Component({
	selector: 'ui-info-item',
	templateUrl: './info-item.component.html',
	styleUrls: ['./info-item.component.scss']
})

export class InfoItemComponent {
	@Input() public icon: IconName;
	@Input() public text: string;
}
