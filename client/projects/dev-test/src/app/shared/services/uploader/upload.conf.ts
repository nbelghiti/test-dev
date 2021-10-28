import { InjectionToken } from '@angular/core';

import { IUploadOptions } from './upload.types';

export const UPLOAD_OPTIONS: InjectionToken<IUploadOptions> = new InjectionToken<IUploadOptions>('UPLOAD_OPTIONS');
