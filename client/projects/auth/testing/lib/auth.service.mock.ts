import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject, of } from 'rxjs';

import { IAuth0Client } from 'adb-auth';

@Injectable({
	providedIn: 'root',
})
export class MockAuthService {
	public client$: Observable<IAuth0Client> = of({
		isAuthenticated: () => new Subject<boolean>(),
		handleRedirectCallback: () => new Subject<any>(),
		getTokenSilently: () => new Subject<string>(),
		getUser: () => new Subject<any>(),
		loginWithRedirect: () => new Subject<any>(),
		logout: () => {},
	});
	public isAuthenticated$: ReplaySubject<boolean> = new BehaviorSubject<boolean>(true) as any as ReplaySubject<boolean>;
	public loggedInUser$: Subject<any> = new Subject();

	public getUser(_options?: any): Observable<any> {
		return of({ username: 'testuser' });
	}

	public login(_redirectPath: string = '/'): void {}

	public logout(): void {}

	public isAuthenticated(): Observable<boolean> {
		return of(true);
	}

	public getAccessToken(): Observable<string> {
		return of('access_token');
	}

	public handleRedirectCallback(): Observable<any> {
		return of();
	}
}
