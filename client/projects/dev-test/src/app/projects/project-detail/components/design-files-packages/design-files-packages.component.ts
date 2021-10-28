import { Component, Input } from '@angular/core';

import { CardAlignType, HeadingLevel } from 'adb-ui';

import { IProject } from '~/repositories/projects/services/projects.types';

@Component({
	selector: 'adb-design-files-packages',
	templateUrl: './design-files-packages.component.html',
})

export class DesignFilesPackagesComponent {
	@Input() public project: IProject;
	public HeadingLevel = HeadingLevel;
	public CardAlignType = CardAlignType;
}
