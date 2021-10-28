import { IHeaderInfo } from '../store/context.types';

export const mockContextFacade = {
	setHeaderInfo: jest.fn((info: IHeaderInfo) => console.log('setting header info', info)),
	resetHeaderInfo: jest.fn(() => console.log('resetting header info')),
};
