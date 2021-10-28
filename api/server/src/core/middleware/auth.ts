import jwt from 'express-jwt';
import { expressJwtSecret } from 'jwks-rsa';

import config from '@config';

export class AuthMiddleware {
	public static verifyJWT(): jwt.RequestHandler {
		const {
			jwksUri,
			audience,
			issuer,
		} = config.auth;

		return jwt({
			secret: expressJwtSecret({
				cache: true,
				rateLimit: true,
				jwksRequestsPerMinute: 5,
				jwksUri,
			}),
			audience: audience ? audience.split(',') : '',
			issuer,
			algorithms: ['RS256'],
		});
	}
}
