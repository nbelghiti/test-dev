import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
	public canActivate: () => Observable<boolean> = this.verifyUser;
	public canActivateChild: () => Observable<boolean> = this.verifyUser;

	constructor(
		private router: Router,
		private auth: AuthService,
	) { }

	public verifyUser(): Observable<boolean> {
		return this.auth.isAuthenticated()
			.pipe(
				tap((isAuthenticated: boolean) => {
					if (!isAuthenticated) {
						this.router.navigate(['/product']);
					}
				}),
			);
	}
}
