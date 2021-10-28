import { Component, Input } from '@angular/core';

import { StatusLabelType } from '../status-label/status-label.types';

@Component({
	selector: 'ui-project-info',
	templateUrl: './project-info.component.html',
	styleUrls: ['./project-info.component.scss']
})

export class ProjectInfoComponent {
	@Input() public title: string;
	@Input() public phase: StatusLabelType = StatusLabelType.inProgress;
	@Input() public created: string;
	@Input() public imageSrc: string;
	@Input() public client: string;
	@Input() public location: string;
	@Input() public vault: string;
	@Input() public ACCType: string;
	@Input() public ACCFormat: string;
}
