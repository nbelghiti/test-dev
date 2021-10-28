import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { concatMap, tap } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Component({
	selector: 'auth-callback',
	template: '',
})
export class CallbackComponent implements OnInit {
	private targetUrl = '/';

	constructor(
		private auth: AuthService,
		private router: Router,
	) {}

	public ngOnInit(): void {
		this.auth.handleRedirectCallback().pipe(
			tap(({ appState }) => {
				this.targetUrl = appState ? appState.target : '/';
			}),
			concatMap(() => combineLatest(
				this.auth.getUser(),
				this.auth.isAuthenticated(),
			)),
		).subscribe(() => {
			this.router.navigate([this.targetUrl]);
		});
	}
}
