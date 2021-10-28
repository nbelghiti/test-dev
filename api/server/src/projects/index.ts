import { Application } from 'express';

import { ProjectsV1 } from './v1/index';

export class ProjectsModule {
	public static load(app: Application): void {
		ProjectsV1.load(app);
	}
}
