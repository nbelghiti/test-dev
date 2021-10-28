import { ErrorHandler, Inject, Injectable, Injector } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class GlobalErrorHandler extends ErrorHandler {
	constructor(
		@Inject(Injector) private readonly injector: Injector,
		private translate: TranslateService
	) {
		super();
	}

	handleError(error) {
		this.translate.get('ERRORS__GENERAL').subscribe((message: string) => {
			this.toastr.error(message, null, { onActivateTick: true });
		});

		console.error(error);

		super.handleError(error);
	}

	/**
	 * Need to get ToastrService from injector rather than constructor injection to avoid cyclic dependency error
	 * https://github.com/scttcper/ngx-toastr/issues/327
	 */
	private get toastr(): ToastrService {
		return this.injector.get(ToastrService);
	}
}
