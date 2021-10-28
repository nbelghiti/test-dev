import { ManagementClient } from 'auth0';

import config from '@config';

import { IAuth0User } from './auth0.types';

export class Auth0 {
	private static management: ManagementClient = new ManagementClient({
		domain: config.auth0.domain,
		clientId: config.auth0.clientId,
		clientSecret: config.auth0.clientSecret,
	});

	public static getUsers({ name, email }: { name: string; email: string }): Promise<IAuth0User[]> {
		return this.management.getUsers({
			q: `name:*${name}* AND email:*${email}*`,
			fields: 'name,email,picture,user_id',
		}) as Promise<IAuth0User[]>;
	}
}
