import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { AvatarModule } from '../avatar/avatar.module';

import { UserComponent } from './user.component';

@NgModule({
	imports: [
		TranslateModule,
		CommonModule,
		AvatarModule,
	],
	declarations: [
		UserComponent,
	],
	exports: [
		UserComponent,
	],
})
export class UserModule {}
