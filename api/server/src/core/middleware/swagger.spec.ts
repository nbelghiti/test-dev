import { default as express, Application } from 'express';

import { SwaggerMiddleware } from './swagger';

describe('[UNIT - CORE] SwaggerMiddleware', () => {
	it('Should load the swagger middleware', (done: jest.DoneCallback) => {
		const mockApp = {
			use: jest.fn(),
		};

		SwaggerMiddleware.load(mockApp as any); // tslint:disable-line no-any

		expect(mockApp.use).toHaveBeenCalledTimes(1);

		done();
	});
});
