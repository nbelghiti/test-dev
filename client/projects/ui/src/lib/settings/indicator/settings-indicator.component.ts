import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { IconName } from '../../icon/icon.types';

@Component({
	selector: 'ui-settings-indicator',
	templateUrl: './settings-indicator.component.html',
	styleUrls: ['./settings-indicator.component.scss']
})

export class SettingsIndicatorComponent {
	@Input() public link: string | RouterLink;

	public hasClick: boolean = false;
	public IconName: typeof IconName = IconName;
}
