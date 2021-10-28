import { default as Joi } from 'joi';
import { mockReq, mockRes } from 'sinon-express-mock';

import { DataMiddleware } from './data';
import { IRequest, IResponse, INext, IValidationError, IValidationPreset } from '../shared.types';

describe('[UNIT - SHARED] DataMiddleware', () => {
	describe('Copy' , () => {
		it('Should copy all request data to req.data', (done: jest.DoneCallback) => {
			const req: IRequest = mockReq({
				body: {
					key: 'body',
				},
				headers: {
					key: 'headers',
				},
				params: {
					key: 'params',
				},
				query: {
					key: 'query',
				},
				file: {
					key: 'file',
				},
			});
			const res: IResponse = mockRes();

			DataMiddleware.copy(req, res, () => {
				expect(req.data).toBeDefined();
				expect(req.data).toBeObject();
				expect(req.data).toContainAllKeys([
					'body',
					'headers',
					'params',
					'query',
					'file',
				]);
				expect(req.data).toEqual({
					body: {
						key: 'body',
					},
					headers: {
						key: 'headers',
					},
					params: {
						key: 'params',
					},
					query: {
						key: 'query',
					},
					file: {
						key: 'file',
					},
				});
				done();
			});
		});
	});

	describe('Validate', () => {
		const preset: IValidationPreset = {
			options: {},
			schema: Joi.object().required().keys({
				key: Joi.string().required().valid(['value']),
			}),
		};

		it('Should progress if there are no errors', (done: jest.DoneCallback) => {
			const req: IRequest = mockReq({
				data: {
					body: {
						key: 'value',
					},
				},
			});
			const res: IResponse = mockRes();

			DataMiddleware.validate('body', preset, req, res, ((err: IValidationError) => {
				expect(err).toBeUndefined();
				expect(req.data.body).toBeDefined();
				expect(req.data.body).toBeObject();
				expect(req.data.body).toContainAllKeys([
					'key',
				]);
				expect(req.data.body).toEqual({
					key: 'value',
				});
				done();
			}) as any); // tslint:disable-line no-any
		});

		it('Should throw an error if there are errors', (done: jest.DoneCallback) => {
			const req = mockReq({
				data: {
					body: {
						key: 'invalid',
					},
				},
			}) as any as IRequest; // tslint:disable-line no-any
			const res: IResponse = mockRes();
			const next: INext = () => {};

			expect(() => {
				DataMiddleware.validate('body', preset, req, res, next);
			}).toThrowError('body');
			done();
		});

		it('Should throw an error if there if the data hasn\'t been cloned to req.data', (done: jest.DoneCallback) => {
			const req: IRequest = mockReq();
			const res: IResponse = mockRes();
			const next: INext = () => {};

			expect(() => {
				DataMiddleware.validate('body', preset, req, res, next);
			}).toThrowError('The request data has not been cloned');
			done();
		});
	});
});
