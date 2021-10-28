import { Component, HostBinding, Input } from '@angular/core';

import { ButtonType } from '../button/button.types';
import { IconName } from '../icon/icon.types';

@Component({
	selector: 'ui-file',
	templateUrl: './file.component.html',
	styleUrls: ['./file.component.scss']
})

export class FileComponent {
	@HostBinding('class.u-full-width') public fullWidthClassName = true;

	@Input() public label: string;
	@Input() public url: string;
	@Input() public lastGenerated: string = new Date().getDay().toString();
	@Input() public iconBefore: string;

	public ButtonType: typeof ButtonType = ButtonType;
	public IconName: typeof IconName = IconName;
}
