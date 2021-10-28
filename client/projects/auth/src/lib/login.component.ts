import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Component({
	selector: 'auth-login',
	template: '',
})
export class LoginComponent implements OnInit {
	constructor(
		private auth: AuthService,
		private router: Router,
	) {}

	public ngOnInit(): void {
		this.auth.isAuthenticated()
			.pipe(
				take(1),
			)
			.subscribe((isAuthenticated: boolean) => {
				if (isAuthenticated) {
					return this.router.navigateByUrl('/');
				}
				return this.router.navigateByUrl('/');
				//this.auth.login();
			});
	}
}
