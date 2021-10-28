import { KnownMimeTypes } from '@shared/types/file';

import { createFileResponse } from './file';

describe('[UNIT - SHARED] File', () => {
	describe('createFileResponse', () => {
		it('should be a curried function', () => {
			// tslint:disable-next-line no-any
			const mockResponse: any = {
				writeHead: jest.fn(),
				end: jest.fn(),
			};

			const curriedWithResponse = createFileResponse(mockResponse);

			expect(mockResponse.writeHead).not.toHaveBeenCalled();
			expect(mockResponse.end).not.toHaveBeenCalled();
			expect(typeof curriedWithResponse).toBe('function');

			const curriedWithFilename = curriedWithResponse('test.txt');

			expect(mockResponse.writeHead).not.toHaveBeenCalled();
			expect(mockResponse.end).not.toHaveBeenCalled();
			expect(typeof curriedWithFilename).toBe('function');
		});

		it('should send a file response', () => {
			// tslint:disable-next-line no-any
			const mockResponse: any = {
				writeHead: jest.fn(),
				end: jest.fn(),
			};

			createFileResponse(mockResponse, 'test.txt', 'content');

			expect(mockResponse.writeHead).toHaveBeenCalledWith(200, {
				'Content-Disposition': 'attachment; filename=test.txt',
				'Content-Type': KnownMimeTypes.txt,
				'File-Name': 'test.txt',
			});
			expect(mockResponse.end).toHaveBeenCalledWith('content');
		});
	});
});
