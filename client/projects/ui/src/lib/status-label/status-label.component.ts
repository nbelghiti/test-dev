import { Component, Input } from '@angular/core';

import { StatusLabelType } from './status-label.types';

@Component({
	selector: 'ui-status-label',
	templateUrl: './status-label.component.html',
	styleUrls: ['./status-label.component.scss'],
})

export class StatusLabelComponent {
	@Input() public type: StatusLabelType = StatusLabelType.engineering;
	public statusType = StatusLabelType;

	public handleClickEvent(): void {
		console.log('status label clicked');
	}
}
