import { IError } from './repository.types';

export const aErrorMock: IError = {
	details: [],
	host: 'host',
	identifier: 'identifier',
	message: 'message',
	name: 'name',
	stack: 'stack',
	status: 404,
	timestamp: 'timestamp',
};
