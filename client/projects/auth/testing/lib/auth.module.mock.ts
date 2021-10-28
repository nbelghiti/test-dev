import { NgModule } from '@angular/core';

import { AUTH_CONFIG, AuthService } from 'adb-auth';

import { MockAuthService } from './auth.service.mock';
import { MockCallbackComponent } from './callback.component.mock';

@NgModule({
	declarations: [
		MockCallbackComponent,
	],
	providers: [
		{
			provide: AuthService,
			useClass: MockAuthService,
		},
		{
			provide: AUTH_CONFIG,
			useValue: {},
		},
	],
	exports: [
		MockCallbackComponent,
	],
})
export class MockAuthModule {}
