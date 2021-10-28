import { Injector } from '@angular/core';
import { ObservableInput } from 'rxjs';

export interface IAuthConfig {
	audience: string;
	clientId: string;
	domain: string;
	logoutRedirectUri: string;
	redirectUri: string;
}

export type IAuthConfigFactory = (injector: Injector) => IAuthConfig;

export interface IAuth0Client {
	isAuthenticated: (..._) => ObservableInput<boolean>;
	handleRedirectCallback: (..._) => ObservableInput<any>;
	getTokenSilently: (..._) => ObservableInput<string>;
	getUser: (..._) => ObservableInput<any>;
	loginWithRedirect: (..._) => ObservableInput<any>;
	logout: (..._) => void;
}

export type ICreateAuth0Client = (..._) => Promise<IAuth0Client>;
