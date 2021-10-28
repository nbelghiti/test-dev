import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, getTestBed } from '@angular/core/testing';

import { IError } from '~/repositories/repository.types';

import { aPermissionsMock } from './permissions.mock';
import { PermissionsService } from './permissions.service';
import { IPermissionMap } from './permissions.types';

describe('PermissionsService', () => {
	let injector: TestBed;
	let service: PermissionsService;
	let httpMock: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule
			],
			providers: [
				PermissionsService,
			],
		});

		injector = getTestBed();
		service = injector.get(PermissionsService);
		httpMock = injector.get(HttpTestingController);
	});

	describe('getProjectPermissions', () => {
		const projectId = '2ef01940-240a-489b-92f6-f603d7fd753e';

		it('should return project permissions from the API', async(done: jest.DoneCallback) => {
			const sub = service.getProjectPermissions(projectId).subscribe((permissions: IPermissionMap) => {
				expect(permissions).toEqual(aPermissionsMock);

				done();
			});

			const req = httpMock.expectOne(`${service['baseUrl']}/project-permissions/${projectId}`);
			expect(req.request.method).toBe('GET');

			req.flush(aPermissionsMock);
		});

		it('should handle a failed request correctly', async(done: jest.DoneCallback) => {
			const sub = service.getProjectPermissions(projectId).subscribe(() => {}, (error: IError) => {
				expect(error).toBeDefined();

				sub.unsubscribe();

				done();
			});

			const req = httpMock.expectOne(`${service['baseUrl']}/project-permissions/${projectId}`);
			expect(req.request.method).toBe('GET');

			req.flush(null, {
				status: 403,
				statusText: 'Forbidden',
			});
		});
	});

	afterEach(() => {
		httpMock.verify();
	});
});
