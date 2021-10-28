import { IPermissionsState } from './permissions/permissions.types';
import { IUserProfileState } from './profile/profile.types';

export interface IUserState {
	profile: IUserProfileState;
	permissions: IPermissionsState;
}

