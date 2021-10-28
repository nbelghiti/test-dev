import { Component, Input } from '@angular/core';

import { ButtonType, ITeam, IconName } from 'adb-ui';

import { IBaseLink } from '~/shared/shared.types';

@Component({
	selector: 'adb-team-overview',
	templateUrl: 'team-overview.component.html'
})
export class TeamOverviewComponent {
	@Input() public editLink: IBaseLink;
	@Input() public teams: ITeam[];
	@Input() public loading: boolean = false;

	public ButtonType: typeof ButtonType = ButtonType;
	public IconName: typeof IconName = IconName;
}
