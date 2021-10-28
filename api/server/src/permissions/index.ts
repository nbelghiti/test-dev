import { PermissionsV1 } from './v1/index';

export class PermissionsModule {
	public static load(app: Application): void {
		PermissionsV1.load(app);
	}
}
