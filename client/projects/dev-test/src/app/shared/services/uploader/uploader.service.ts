import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { isNil } from 'ramda';
import { Observable } from 'rxjs';

import { UPLOAD_OPTIONS } from './upload.conf';
import { IUploadOptions, UploadFormat } from './upload.types';

@Injectable()
export class UploaderService {
	private format: UploadFormat;
	private uploadURL: string;

	constructor(
		private http: HttpClient,
		@Inject(UPLOAD_OPTIONS) private uploadOptions: IUploadOptions,
	) {
		this.format = this.uploadOptions.format || UploadFormat.formData;
		this.uploadURL = this.uploadOptions.url;
	}

	public uploadFile(
		file: File,
		params?: { [key: string]: any }
	): Observable<unknown> {
		const requestData = this.getRequestData(this.format, file, params);

		return this.http.post(this.uploadURL, requestData);
	}

	public getRequestData(
		format: UploadFormat,
		data: File | File[],
		params?: { [key: string]: any }
	): FormData | void {
		if (format !== UploadFormat.formData) {
			return null;
		}

		const formData = new FormData();

		if (Array.isArray(data)) {
			data.forEach((file: File) => {
				formData.append('file[]', file);
			});
		} else {
			formData.append('file', data);
		}

		if (!isNil(params)) {
			const keys = Object.keys(params);

			keys.forEach((key: string) => formData.append(key, params[key]));
		}

		return formData;
	}
}
