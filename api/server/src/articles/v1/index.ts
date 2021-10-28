import { Application } from 'express';
import {ArticlesV1Router} from "@articles/v1/router";

export class ArticlesV1 {
	public static baseUrl: string = '/v1/articles';
	public static router = new ArticlesV1Router();

	public static load(app: Application): void {
		this.router.load(app);
		this.router.init(app);
	}
}
