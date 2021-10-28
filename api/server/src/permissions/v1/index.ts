import { Application } from 'express';

import { PermissionsV1Router } from './router';

export class PermissionsV1 {
	public static baseUrl: string = '/v1/permissions';
	public static router = new PermissionsV1Router();

	public static load(app: Application): void {
		this.router.load(app);
		this.router.init(app);
	}
}
