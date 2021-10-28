export interface IUploadResponse {
	message?: string;
	errors?: string[];
	branchId: string;
	mergeRequestId: string;
}
