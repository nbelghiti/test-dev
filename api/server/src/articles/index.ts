import { Application } from 'express';
import { ArticlesV1 } from './v1/index';

export class ArticlesModule {
	public static load(app: Application): void {
		ArticlesV1.load(app);
	}
}
