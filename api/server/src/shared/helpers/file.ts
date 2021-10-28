import { curry } from 'ramda';

import { KnownMimeTypes } from '../types/file';
import { IResponse } from '../types/request';

export const createFileResponse = curry((res: IResponse, filename: string, contents: Buffer | string): void => {
	const extension: string = filename.split('.').pop();
	const mimeType = KnownMimeTypes[extension as keyof typeof KnownMimeTypes] || 'application/octet-stream';

	res.writeHead(200, {
		'Content-Disposition': `attachment; filename=${filename}`,
		'Content-Type': mimeType,
		'File-Name': filename,
	});

	res.end(contents);
});
