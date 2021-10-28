import { Auth0 } from './auth0';
import { auth0UserMock } from '@test/mocks/auth0';

describe('[UNIT - SHARED] Auth0', () => {
	beforeAll(() => {
		Auth0['management'] = {
			getUsers: jest.fn(() => Promise.resolve([auth0UserMock])),
		} as any; // tslint:disable-line no-any
	});

	it('should build the q based on given data', () => {
		Auth0.getUsers({
			name: 'My Name',
			email: 'my@email.com',
		});

		expect(Auth0['management'].getUsers).toHaveBeenCalledWith({
			q: 'name:*My Name* AND email:*my@email.com*',
			fields: 'name,email,picture,user_id',
		});
	});
});
