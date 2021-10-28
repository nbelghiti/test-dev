import { logger } from '@shared/helpers/logger';
import { wait } from '@test/helpers/wait';

import { App } from './app';

describe('[UNIT - APP] Application', () => {
	let closeServerSpy: jest.SpyInstance;
	let exitProcessSpy: jest.SpyInstance;
	let loggerErrorSpy: jest.SpyInstance;
	let loggerInfoSpy: jest.SpyInstance;

	beforeEach(() => {
		exitProcessSpy = jest.spyOn(process, 'exit').mockImplementation();
		loggerErrorSpy = jest.spyOn(logger, 'error');
		loggerInfoSpy = jest.spyOn(logger, 'info');
	});

	afterEach(() => {
		exitProcessSpy.mockRestore();
		loggerErrorSpy.mockRestore();
		loggerInfoSpy.mockRestore();
	});

	describe('Constructor', () => {
		it('Should start an Express server', async () => {
			const app = new App({ start: true });

			await wait(500);

			expect(app).toBeDefined();
			expect(app.app).toBeDefined();
			expect(app.server).toBeDefined();
			expect(loggerInfoSpy).toHaveBeenCalledWith('Server running on test environment at port 3001');

			app.server.close();
		});
	});

	describe('Lifecycle', () => {
		let app: App;

		beforeEach(() => {
			app = new App();
		});

		afterEach(() => {
			if (app.server) {
				app.server.close();
			}
		});

		it('Should start an Express server', async () => {
			app.start();

			await wait(500);

			expect(app).toBeDefined();
			expect(app.app).toBeDefined();
			expect(app.server).toBeDefined();
			expect(loggerInfoSpy).toHaveBeenCalledWith('Server running on test environment at port 3001');

			app.server.close();
		});

		it('Should start an Express server and error', async () => {
			const error: Error = new Error();

			app.app.listen = ((port: number, callback: (err?: Error) => void) => {
				callback(error);
			}) as any; // tslint:disable-line no-any

			app.start();

			await wait(500);

			expect(loggerErrorSpy).toHaveBeenCalledWith(error);
			expect(exitProcessSpy).toHaveBeenCalledWith(1);

		});

		it('Should stop the Express server on SIGTERM', async () => {
			app.start();

			await wait(500);

			closeServerSpy = jest.spyOn(app.server, 'close');

			app.stop('SIGTERM');

			await wait(500);

			expect(loggerInfoSpy).toHaveBeenCalledWith('Server stopped due to SIGTERM signal, graceful shutdown');
			expect(closeServerSpy).toHaveBeenCalled();
			expect(exitProcessSpy).toHaveBeenCalled();

			closeServerSpy.mockRestore();
		});

		it('Should stop the Express server on SIGTERM and error', async () => {
			app.start();

			await wait(500);

			const error: Error = new Error();
			const close: Function = app.server.close;
			const mockCallback = (callback?: (err?: Error) => void) => {
				callback(error);
			};

			closeServerSpy = jest.spyOn(app.server, 'close').mockImplementation(mockCallback as any); // tslint:disable-line no-any

			await app.stop('SIGTERM');

			await wait(500);

			expect(loggerInfoSpy).toHaveBeenCalledWith('Server stopped due to SIGTERM signal, graceful shutdown');
			expect(closeServerSpy).toHaveBeenCalled();
			expect(loggerErrorSpy).toHaveBeenCalledWith(error);
			expect(exitProcessSpy).toHaveBeenCalledWith(1);

			closeServerSpy.mockRestore();
			app.server.close = close as any; // tslint:disable-line no-any
			app.server.close();
		});

		it('Should stop the Express server on SIGINT', async () => {
			app.start();

			await wait(500);

			closeServerSpy = jest.spyOn(app.server, 'close');

			app.stop('SIGINT');

			await wait(500);

			expect(loggerInfoSpy).toHaveBeenCalledWith('Server stopped due to SIGINT signal, graceful shutdown');
			expect(closeServerSpy).toHaveBeenCalled();
			expect(exitProcessSpy).toHaveBeenCalled();

			closeServerSpy.mockRestore();
		});

		it('Should stop the Express server on SIGINT and error', async () => {
			app.start();

			await wait(500);

			const error: Error = new Error();
			const close: Function = app.server.close;

			app.server.close = ((callback: (err?: Error) => void) => {
				callback(error);
			}) as any; // tslint:disable-line no-any

			closeServerSpy = jest.spyOn(app.server, 'close');

			app.stop('SIGINT');

			await wait(500);

			expect(loggerInfoSpy).toHaveBeenCalledWith('Server stopped due to SIGINT signal, graceful shutdown');
			expect(closeServerSpy).toHaveBeenCalled();
			expect(loggerErrorSpy).toHaveBeenCalledWith(error);
			expect(exitProcessSpy).toHaveBeenCalledWith(1);

			closeServerSpy.mockRestore();
			app.server.close = close as any; // tslint:disable-line no-any
			app.server.close();
		});
	});

});
