import { DOCUMENT } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';
import { pathOr, propOr } from 'ramda';

import { AuthModule, IAuthConfig } from 'adb-auth';
import { UIModule } from 'adb-ui';

import { AppComponent } from '~/app.component';
import { CoreModule } from '~/core/core.module';

import { environment } from '../environments/environment';

import { ToastrConfig } from './core/errors.const';
import { HttpLoaderFactory } from './core/translations/factories/http-loader.factory';
import { RepositoriesModule } from './repositories/repositories.module';

export function AuthConfigFactory(injector: Injector): IAuthConfig {
	const doc = injector.get(DOCUMENT);
	const origin = pathOr(environment.HOST, ['defaultView', 'location', 'origin'], doc);

	return {
		audience: environment.AUTH0_AUDIENCE,
		clientId: environment.AUTH0_CLIENT_ID,
		domain: environment.AUTH0_DOMAIN,
		logoutRedirectUri: origin + propOr('', 'AUTH0_LOGOUT_REDIRECT_URI', environment),
		redirectUri: origin + environment.AUTH0_CALLBACK,
	};
}

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		UIModule,
		ToastrModule.forRoot(ToastrConfig),
		AuthModule.forRoot(AuthConfigFactory),
		StoreModule.forRoot({}),
		EffectsModule.forRoot([]),
		StoreDevtoolsModule.instrument({
			logOnly: environment.production,
		}),
		RouterModule.forRoot([]),
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient],
			},
			isolate: false,
		}),
		// App imports
		CoreModule,
		RepositoriesModule,
	],
	providers: [],
	bootstrap: [
		AppComponent
	],
	exports: [
		TranslateModule
	],
})
export class AppModule { }
