import { Component, Input } from '@angular/core';

import { IconName } from '../icon/icon.types';

import { EmptyStateSize } from './empty-state.types';

@Component({
	selector: 'ui-empty-state',
	templateUrl: './empty-state.component.html',
	styleUrls: ['./empty-state.component.scss']
})

export class EmptyStateComponent {
	@Input() public icon: IconName;
	@Input() public message: string;
	@Input() public smallIcon: boolean = false;
	@Input() public size: EmptyStateSize = EmptyStateSize.normal;

	public EmptyStateSize = EmptyStateSize;
}
