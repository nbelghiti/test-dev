export interface IUserProfile {
	sub?: string;
	email: string;
	name: string;
	nickname: string;
	picture: string;
}

export type IUserProfileState = IUserProfile;

export enum UserProfileActions {
	checkAuthentication = '[Profile]: check authentication',
	authenticationSuccess = '[Profile]: authentication success',
	getUserProfileSuccess = '[Profile]: get user: success',
	logout = '[Profile]: logout',
	logoutSuccess = '[Profile]: logout: success',
}
