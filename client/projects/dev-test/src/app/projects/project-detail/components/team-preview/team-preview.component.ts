import { Component, Input } from '@angular/core';

import { IconName } from 'adb-ui';

import { ITeam } from '~/repositories/teams/services/teams.types';
import { IBaseLink } from '~/shared/shared.types';

@Component({
	selector: 'adb-team-preview',
	templateUrl: 'team-preview.component.html'
})

export class TeamPreviewComponent {
	@Input() label: string;
	@Input() team: ITeam;
	@Input() loading: boolean = false;
	@Input() link: IBaseLink;

	public IconName: typeof IconName = IconName;
}
