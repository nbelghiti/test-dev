import { Component, Input } from '@angular/core';

import { IconName } from '../icon/icon.types';

import { HeadingLevel } from './heading.types';

@Component({
	selector: 'ui-heading',
	templateUrl: './heading.component.html',
	styleUrls: ['./heading.component.scss']
})

export class HeadingComponent {
	@Input() public title: string;
	@Input() public classes: string = '';
	@Input() public inline: boolean = false;
	@Input() public loading: boolean = false;
	@Input() public level: HeadingLevel = HeadingLevel.heading1;

	public HeadingLevel: typeof HeadingLevel = HeadingLevel;
	public IconName: typeof IconName = IconName;
}
