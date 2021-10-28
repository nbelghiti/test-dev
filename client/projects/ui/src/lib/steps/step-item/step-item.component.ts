import { Component, Input } from '@angular/core';

import { StepType } from '../steps.types';

@Component({
	selector: 'ui-step-item',
	templateUrl: './step-item.component.html',
	styleUrls: ['./step-item.component.scss']
})

export class StepItemComponent {
	@Input() public number: number;
	@Input() public state: StepType = StepType.default;
	@Input() public title: string;
	@Input() public description: string;
	public StepType = StepType;
}
