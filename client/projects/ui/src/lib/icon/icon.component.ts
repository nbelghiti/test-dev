import { Component, HostBinding, Input } from '@angular/core';

import { IconName, IconSize, IconType } from './icon.types';

@Component({
	selector: 'ui-icon',
	templateUrl: './icon.component.html',
	styleUrls: ['./icon.component.scss']
})

export class IconComponent {
	@Input() public name: IconName;
	@Input() public type: IconType = null;
	@Input() public size: IconSize = null;

	@HostBinding('class.c-icon') public className = true;
}
