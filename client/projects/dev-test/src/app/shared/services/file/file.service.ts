import { DOCUMENT } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable()
export class FileService {
	private window;

	constructor(
		@Inject(DOCUMENT) public document,
	) {
		if (this.document) {
			this.window = this.document.defaultView;
		}
	}

	public download(res: HttpResponse<ArrayBuffer>): void  {
		// First get the file info and data from the response
		const name = res.headers.get('File-Name');
		const type = res.headers.get('Content-Type');
		const blob = new Blob([res.body as any], { type });

		// Create a new anchor
		const el = this.document.createElement('a');
		// Create an URL for downloading the blob and attach it to the anchor
		el.href = this.window.URL.createObjectURL(blob);
		// Provide the filename to the anchor
		el.download = name;
		// Attach the anchor to the body
		this.document.body.appendChild(el);
		// Click the anchor
		el.click();
		// Remove the anchor from the body
		this.document.body.removeChild(el);
	}
}
