import { Component, Input } from '@angular/core';

import { ButtonType } from '../button/button.types';
import { IconName } from '../icon/icon.types';

@Component({
	selector: 'ui-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
	@Input() public home?: boolean;
	@Input() public backLink?: string;
	@Input() public breadcrumb?: any;
	@Input() public editLink?: string[] = null;

	public ButtonType: typeof ButtonType = ButtonType;
	public IconName: typeof IconName = IconName;
}
