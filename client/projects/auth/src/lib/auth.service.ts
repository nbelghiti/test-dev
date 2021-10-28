import { Inject, Injectable } from '@angular/core';
import createAuth0Client from '@auth0/auth0-spa-js';
// TODO: clean this up once https://github.com/auth0/auth0-spa-js/pull/310 gets merged
// import { Auth0Client } from '@auth0/auth0-spa-js';
import { Observable, ReplaySubject, Subject, from, throwError } from 'rxjs';
import { catchError, concatMap, filter, map, shareReplay, take, tap } from 'rxjs/operators';

import { AUTH_CONFIG } from './auth.conf';
import { IAuth0Client, IAuthConfig, ICreateAuth0Client } from './auth.types';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	public client$: Observable<IAuth0Client>;
	public isAuthenticated$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
	public loggedInUser$: Subject<any> = new Subject<any>();

	constructor(
		@Inject(AUTH_CONFIG) private config: IAuthConfig,
	) {
		this.client$ = from((createAuth0Client as ICreateAuth0Client)({
			domain: this.config.domain,
			client_id: this.config.clientId,
			redirect_uri: this.config.redirectUri,
			audience: this.config.audience,
		})).pipe(
			shareReplay(1),
			catchError((err) => throwError(err)),
		);
	}

	// public getUser(options?: GetUserOptions): Observable<any> {
	public getUser(options?: any): Observable<any> {
		return this.client$.pipe(
			concatMap((client: IAuth0Client) => from(client.getUser(options))),
			tap((user) => {
				this.loggedInUser$.next(user);
			}),
		);
	}

	public login(redirectPath: string = '/'): void {
		this.client$.pipe(
			take(1),
		).subscribe((client: IAuth0Client) => {
			client.loginWithRedirect({
				redirect_uri: this.config.redirectUri,
				appState: { target: redirectPath },
			});
		});
	}

	public logout(): void {
		this.client$.pipe(
			take(1),
		).subscribe((client: IAuth0Client) => {
			client.logout({
				client_id: this.config.clientId,
				returnTo: this.config.logoutRedirectUri,
			});
		});
	}

	public isAuthenticated(): Observable<boolean> {
		return this.client$.pipe(
			concatMap((client: IAuth0Client) => from(client.isAuthenticated())),
			take(1),
			tap((isAuthenticated: boolean) => {
				this.isAuthenticated$.next(!!isAuthenticated);
			}),
		);
	}

	public getAccessToken(): Observable<string> {
		return this.client$.pipe(
			concatMap((client: IAuth0Client) => this.isAuthenticated$.pipe(
				filter((isAuthenticated: boolean) => !!isAuthenticated),
				map(() => client),
			)),
			concatMap((client: IAuth0Client) => from(client.getTokenSilently())),
		);
	}

	// public handleRedirectCallback(): Observable<RedirectLoginResult> {
	public handleRedirectCallback(): Observable<any> {
		return this.client$.pipe(
			concatMap((client: IAuth0Client) => from(client.handleRedirectCallback())),
		);
	}
}
