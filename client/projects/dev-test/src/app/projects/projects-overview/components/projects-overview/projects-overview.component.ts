import { Component, EventEmitter, Input, Output } from '@angular/core';

import { HeadingLevel, IconName, StatusLabelType } from 'adb-ui';

import { IProject } from '~/repositories/projects/services/projects.types';

@Component({
	selector: 'adb-projects-overview',
	templateUrl: './projects-overview.component.html',
})

export class ProjectsOverviewComponent {
	@Input() public projects: IProject[] = [];
	@Input() public loading: boolean = false;
	@Output() public clicked: EventEmitter<string> = new EventEmitter<string>();

	public StatusType: typeof StatusLabelType = StatusLabelType;
	public HeadingLevel: typeof HeadingLevel = HeadingLevel;
	public IconName: typeof IconName = IconName;
}
