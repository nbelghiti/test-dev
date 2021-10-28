import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, getTestBed } from '@angular/core/testing';

import { IError } from '../../repository.types';

import { aProjectMock, aProjectsMock } from './projects.mock';
import { ProjectsService } from './projects.service';
import { IProject, IProjects } from './projects.types';

describe('ProjectsService', () => {
	let injector: TestBed;
	let service: ProjectsService;
	let httpMock: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule
			],
			providers: [
				ProjectsService,
			],
		});

		injector = getTestBed();
		service = injector.get(ProjectsService);
		httpMock = injector.get(HttpTestingController);
	});

	describe('getProjects', () => {
		it('should return projects from the API', async(done: jest.DoneCallback) => {
			const sub = service.getProjects({
				name: null,
				accType: null,
				accFormat: null,
				status: null,
				lastUpdated: null,
			}).subscribe((projects: IProjects) => {
				expect(projects).toEqual(aProjectsMock);

				sub.unsubscribe();

				done();
			});

			const req = httpMock.expectOne(`${service['baseUrl']}`);
			expect(req.request.method).toBe('GET');

			req.flush(aProjectsMock);
		});

		it('should handle a failed request correctly', async(done: jest.DoneCallback) => {
			const sub = service.getProjects({
				name: null,
				accType: null,
				accFormat: null,
				status: null,
				lastUpdated: null,
			}).subscribe(() => {}, (error: IError) => {
				expect(error).toBeDefined();

				sub.unsubscribe();

				done();
			});

			const req = httpMock.expectOne(`${service['baseUrl']}`);
			expect(req.request.method).toBe('GET');

			req.flush(null, {
				status: 403,
				statusText: 'Forbidden',
			});
		});
	});

	describe('getProject', () => {
		const projectId = aProjectMock.id;

		it('should return a project from the API', async(done: jest.DoneCallback) => {
			const sub = service.getProject(projectId).subscribe((project: IProject) => {
				expect(project).toEqual(aProjectMock);

				sub.unsubscribe();

				done();
			});

			const req = httpMock.expectOne(`${service['baseUrl']}/${projectId}`);
			expect(req.request.method).toBe('GET');

			req.flush(aProjectMock);
		});

		it('should handle a failed request correctly', async(done: jest.DoneCallback) => {
			const sub = service.getProject(projectId).subscribe(() => {}, (error: IError) => {
				expect(error).toBeDefined();

				sub.unsubscribe();

				done();
			});

			const req = httpMock.expectOne(`${service['baseUrl']}/${projectId}`);
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
