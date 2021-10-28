import { Component, Input } from '@angular/core';

import { IconName } from '../icon/icon.types';

@Component({
	selector: 'ui-info-message',
	templateUrl: './info-message.component.html',
	styleUrls: ['./info-message.component.scss']
})

export class InfoMessageComponent {
	@Input() public icon: IconName;
}
