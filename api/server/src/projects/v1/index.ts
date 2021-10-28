import { Application } from 'express';

import { ProjectsV1Router } from './router';

export class ProjectsV1 {
	public static baseUrl: string = '/v1/fields';
	public static router = new ProjectsV1Router();

	public static load(app: Application): void {
		this.router.load(app);
		this.router.init(app);
	}
}
