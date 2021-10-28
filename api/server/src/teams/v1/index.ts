import { Application } from 'express';

import { TeamsV1Router } from './router';

export class TeamsV1 {
	public static baseUrl: string = '/v1/teams';
	public static router = new TeamsV1Router();

	public static load(app: Application): void {
		this.router.load(app);
		this.router.init(app);
	}
}
