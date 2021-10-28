import { default as express, Application } from 'express';
import { default as bodyParser } from 'body-parser';
import { default as cookieParser } from 'cookie-parser';
import { default as helmet } from 'helmet';
import { parse } from 'qs';

export class GlobalMiddleware {
	public static load(app: Application): void {
		app.set('query parser', (str: string) => parse(str, {
			comma: true,
			arrayLimit: Infinity,
		}));

		app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
		app.use(bodyParser.json({ limit: '50mb' }));

		app.use(cookieParser());

		app.use(express.static(`${process.cwd()}/public`));

		app.use(helmet.hidePoweredBy());
		app.use(helmet.ieNoOpen());
		app.use(helmet.noSniff());
		app.use(helmet.xssFilter());
	}
}
