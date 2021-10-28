import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IUser } from 'adb-ui';

import { ContextFacade } from './core/context/facades/context.facade';
import { IHeaderInfo } from './core/context/store/context.types';
import { RouterFacade } from './core/router/facades/router.facade';
import { UserFacade } from './core/user/facades/user.facade';
import { IUserProfile as IAppUser } from './core/user/store/profile/profile.types';

@Component({
	selector: 'adb-root',
	templateUrl: './app.component.html'
})
export class AppComponent {
	public title: string;
	public user$: Observable<IUser>;
	public avatar$: Observable<string>;
	public headerInfo$: Observable<IHeaderInfo>;
	public notificationCount$: Observable<number>;

	constructor(
		private translate: TranslateService,
		private user: UserFacade,
		private context: ContextFacade,
		private router: RouterFacade,
	) {
		this.initTranslations();
		// this.initUser();
		this.initContext();
		this.initRouter();
	}

	public onLogout(): void {
		this.user.logout();
	}

	private initTranslations(): void {
		this.translate.setDefaultLang('en');
		this.translate.use('en');
	}

	private initUser(): void {
		this.user.checkAuthentication();
		this.user$ = this.user.user$.pipe(
			map((u: IAppUser) => ({
				name: u.name,
				role: '',
			}))
		);
		this.avatar$ = this.user.user$.pipe(
			map((u: IAppUser) => u.picture)
		);
	}

	private initContext(): void {
		this.headerInfo$ = this.context.header$;
	}

	private initRouter(): void {
		this.router.init();
	}
}
