export enum UploadFormat {
	formData = 'formData',
}

export interface IUploadOptions {
	format: UploadFormat;
	url: string;
}
