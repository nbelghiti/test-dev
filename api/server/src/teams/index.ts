import { Application } from 'express';
import { TeamsV1 } from './v1/index';

export class TeamsModule {
	public static load(app: Application): void {
		TeamsV1.load(app);
	}
}
