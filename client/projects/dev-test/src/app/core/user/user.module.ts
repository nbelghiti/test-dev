import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { Directives } from './directives';
import { Facades } from './facades';
import { Services } from './services';
import { PermissionsEffects } from './store/permissions/permissions.effects';
import { UserProfileEffects } from './store/profile/profile.effects';
import { userReducer } from './store/user.reducer';

@NgModule({
	imports: [
		StoreModule.forFeature('user', userReducer),
		EffectsModule.forFeature([ UserProfileEffects, PermissionsEffects ]),
	],
	providers: [
		Facades,
		Services,
		Directives,
	],
	declarations: [
		Directives,
	],
	exports: [
		Directives,
	],
})
export class UserModule {}
