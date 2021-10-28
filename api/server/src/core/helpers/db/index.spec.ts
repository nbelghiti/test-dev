import { Migrate } from '@migrations/utils/migrate';

import { Database } from './index';

describe('[UNIT - CORE] Db index', () => {
	describe('Connect', () => {
		it('Should resolve when connected to the sequelize instance', async (done: jest.DoneCallback) => {
			await Database.connect();

			done();
		});
	});

	describe('CreateSchema', () => {
		it('Should create the schema', async (done: jest.DoneCallback) => {
			const query = jest.spyOn(Database.sequelize, 'query').mockImplementation();

			await Database.createSchema();

			expect(query).toHaveBeenCalled();
			done();
		});
	});

	describe('Init', () => {
		it('Should connect to the db and create the schema', async (done: jest.DoneCallback) => {
			const connect = jest.spyOn(Database, 'connect').mockResolvedValue(undefined);
			const createSchema = jest.spyOn(Database, 'createSchema').mockResolvedValue(undefined);
			const sync = jest.spyOn(Database.sequelize, 'sync').mockImplementation();

			await Database.init();

			expect(connect).toHaveBeenCalled();
			expect(createSchema).toHaveBeenCalled();
			expect(sync).toHaveBeenCalled();
			done();
		});
	});

	describe('Migrations', () => {
		it('Should run the migrations when everything is ready', async (done: jest.DoneCallback) => {
			const runMigrations = jest.spyOn(Migrate, 'run').mockImplementation();
			const connect = jest.spyOn(Database, 'connect').mockImplementation();
			const createSchema = jest.spyOn(Database, 'createSchema').mockImplementation();
			const sync = jest.spyOn(Migrate, 'sync').mockImplementation();

			await Database.migrations();

			expect(connect).toHaveBeenCalled();
			expect(createSchema).toHaveBeenCalled();
			expect(sync).toHaveBeenCalled();
			expect(runMigrations).toHaveBeenCalled();
			done();
		});
	});
});
