import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, getTestBed } from '@angular/core/testing';

import { aTeamMock } from 'adb-test/teams.mock';

import { IError } from '../../repository.types';

import { TeamsService } from './teams.service';
import { ITeam } from './teams.types';

describe('TeamsService', () => {
	let injector: TestBed;
	let service: TeamsService;
	let httpMock: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule
			],
			providers: [
				TeamsService,
			],
		});

		injector = getTestBed();
		service = injector.get(TeamsService);
		httpMock = injector.get(HttpTestingController);
	});

	describe('getTeam', () => {
		const teamId = aTeamMock.id;

		it('should return a team from the API', async(done: jest.DoneCallback) => {
			const sub = service.getTeam(teamId).subscribe((team: ITeam) => {
				expect(team).toEqual(aTeamMock);

				sub.unsubscribe();

				done();
			});

			const req = httpMock.expectOne(`${service['baseUrl']}/${teamId}`);
			expect(req.request.method).toBe('GET');

			req.flush(aTeamMock);
		});

		it('should handle a failed request correctly', async(done: jest.DoneCallback) => {
			const sub = service.getTeam(teamId).subscribe(() => {}, (error: IError) => {
				expect(error).toBeDefined();

				sub.unsubscribe();

				done();
			});

			const req = httpMock.expectOne(`${service['baseUrl']}/${teamId}`);
			expect(req.request.method).toBe('GET');

			req.flush(null, {
				status: 404,
				statusText: 'Not found',
			});
		});
	});

	describe('updateTeam', () => {
		const teamId = aTeamMock.id;

		it('should update a team to the the API', async(done: jest.DoneCallback) => {
			const sub = service.updateTeam(teamId, aTeamMock).subscribe((team: ITeam) => {
				expect(team).toEqual(aTeamMock);

				sub.unsubscribe();

				done();
			});

			const req = httpMock.expectOne(`${service['baseUrl']}/${teamId}`);
			expect(req.request.method).toBe('PUT');

			req.flush(aTeamMock);
		});

		it('should handle a failed request correctly', async(done: jest.DoneCallback) => {
			const sub = service.updateTeam(teamId, aTeamMock).subscribe(() => {}, (error: IError) => {
				expect(error).toBeDefined();

				sub.unsubscribe();

				done();
			});

			const req = httpMock.expectOne(`${service['baseUrl']}/${teamId}`);
			expect(req.request.method).toBe('PUT');

			req.flush(null, {
				status: 404,
				statusText: 'Not found',
			});
		});
	});

	describe('getTeam', () => {
		it('should return a team from the API', async(done: jest.DoneCallback) => {
			const sub = service.getMembers().subscribe((members) => {
				expect(members).toEqual([]);

				sub.unsubscribe();

				done();
			});

			const req = httpMock.expectOne(`${service['baseUrl']}/members`);
			expect(req.request.method).toBe('GET');

			req.flush([]);
		});

		it('should handle a failed request correctly', async(done: jest.DoneCallback) => {
			const sub = service.getMembers().subscribe(() => {}, (error: IError) => {
				expect(error).toBeDefined();

				sub.unsubscribe();

				done();
			});

			const req = httpMock.expectOne(`${service['baseUrl']}/members`);
			expect(req.request.method).toBe('GET');

			req.flush(null, {
				status: 404,
				statusText: 'Not found',
			});
		});
	});

	afterEach(() => {
		httpMock.verify();
	});
});
