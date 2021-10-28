import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injector, ModuleWithProviders, NgModule } from '@angular/core';

import { AUTH_CONFIG } from './auth.conf';
import { AuthGuard } from './auth.guard';
import { AuthInterceptor } from './auth.interceptor';
import { IAuthConfigFactory } from './auth.types';
import { CallbackComponent } from './callback.component';
import { LoginComponent } from './login.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		CallbackComponent,
		LoginComponent,
	],
	providers: [
		AuthGuard,
	],
	exports: [
		CallbackComponent,
	],
})
export class AuthModule {
	public static forRoot(config: IAuthConfigFactory): ModuleWithProviders {
		return {
			ngModule: AuthModule,
			providers: [
				{
					provide: HTTP_INTERCEPTORS,
					useClass: AuthInterceptor,
					multi: true,
				},
				{
					provide: AUTH_CONFIG,
					useFactory: config,
					deps: [Injector],
				},
			],
		};
	}
}
