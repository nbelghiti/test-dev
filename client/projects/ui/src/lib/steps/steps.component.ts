import { Component, Input } from '@angular/core';

import { IStep, StepType } from './steps.types';

@Component({
	selector: 'ui-steps',
	templateUrl: './steps.component.html',
	styleUrls: ['./steps.component.scss']
})

export class StepsComponent {
	@Input() public steps: IStep[];
	@Input() public activeIndex: number = 1;
	public StepType = StepType;
}
