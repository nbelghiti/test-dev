import { InjectionToken } from '@angular/core';

import { IAuthConfig } from './auth.types';

export const AUTH_CONFIG: InjectionToken<IAuthConfig> = new InjectionToken<IAuthConfig>('AUTH_CONFIG');
