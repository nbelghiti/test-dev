import { BehaviorSubject } from 'rxjs';

import { aTeamMock } from 'adb-test/teams.mock';

import { aUserProfile } from '~/core/user/store/profile/profile.mock';

export const mockTeamsFacade = (withLoadingStatus: boolean = false) => ({
	getTeam: jest.fn().mockImplementation((teamId: string) => console.log('getting the team', teamId)),
	updateTeam: jest.fn().mockImplementation((teamId: string) => console.log('updating the team', teamId)),
	selectOne: () => new BehaviorSubject(aTeamMock),
	selectLoading: () => new BehaviorSubject(withLoadingStatus),
	getMembers: () => new BehaviorSubject(aUserProfile)
});

