import { Application } from 'express';

import { CoreRoutes } from './routes';

export class CoreModule {
	public static load(app: Application): void {
		CoreRoutes.load(app);
	}

	public static loadFallback(app: Application): void {
		CoreRoutes.loadFallback(app);
	}
}
