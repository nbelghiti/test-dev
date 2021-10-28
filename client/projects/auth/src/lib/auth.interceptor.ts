import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, mergeMap, take } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable({
	providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
	constructor(
		private auth: AuthService,
	) {}

	public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return this.auth.getAccessToken()
			.pipe(
				take(1),
				mergeMap((token: string) => {
					const authorizedRequest = req.clone({
						setHeaders: {
							Authorization: `Bearer ${token}`,
						},
					});

					return next.handle(authorizedRequest);
				}),
				catchError((err: any) => throwError(err)),
			);
	}
}
