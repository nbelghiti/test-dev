import { Application } from 'express';

import { CoreController } from './controllers/core';

export class CoreRoutes {
	public static baseUrl: string = '/';
	public static coreController = new CoreController();

	public static load(app: Application): void {
		// Get status
		app.route(`${this.baseUrl}status`).get(
			this.coreController.status
		);
	}

	public static loadFallback(app: Application): void {
		// Get fallback
		app.route(['/', '/*']).all(
			this.coreController.fallback
		);
	}
}
