// import { HttpClientModule } from '@angular/common/http';
// import { TestBed, getTestBed } from '@angular/core/testing';
// import { Router } from '@angular/router';
// import { RouterTestingModule } from '@angular/router/testing';
// import { provideMockActions } from '@ngrx/effects/testing';
// import { Action } from '@ngrx/store';
// import { TranslateModule } from '@ngx-translate/core';
// import { ToastrModule } from 'ngx-toastr';
// import { BehaviorSubject, of, throwError } from 'rxjs';

// import { aErrorMock } from '../../repositories.mock';
// import { aProjectFilterMock, aProjectMock, aProjectsMock } from '../services/projects.mock';
// import { ProjectsService } from '../services/projects.service';

// import {
// 	getProject,
// 	getProjectFailed,
// 	getProjects,
// 	refreshProject,
// } fro./articles.actionsons';
// import { ProjectsEffects } fro./articles.effectscts';
// import { ProjectsActions } fro./articles.typespes';

// describe('repository: projects: effects', () => {
// 	let injector: TestBed;
// 	let actions: BehaviorSubject<Action>;
// 	let effects: ProjectsEffects;
// 	let service: ProjectsService;
// 	let router: Router;

// 	beforeEach(() => {
// 		TestBed.configureTestingModule({
// 			imports: [
// 				RouterTestingModule,
// 				ToastrModule.forRoot(),
// 				TranslateModule.forRoot(),
// 				HttpClientModule,
// 			],
// 			providers: [
// 				ProjectsEffects,
// 				{
// 					provide: ProjectsService,
// 					useValue: {
// 						getProject: () => of(aProjectMock),
// 						getProjects: () => of(aProjectsMock),
// 					}
// 				},
// 				provideMockActions(() => actions),
// 			],
// 		});

// 		injector = getTestBed();
// 		effects = injector.get(ProjectsEffects);
// 		service = injector.get(ProjectsService);
// 		router = injector.get(Router);
// 	});

// 	afterEach(() => {
// 		jest.clearAllMocks();
// 	});

// 	describe('getProject$', () => {
// 		it('should store the fetched project', async(done: jest.DoneCallback) => {
// 			const id = aProjectMock.id;
// 			const spyGetProject = spyOn(service, 'getProject').and.returnValue(of(aProjectMock));

// 			actions = new BehaviorSubject(getProject({ id }));

// 			const sub = effects.getProject$.subscribe((data: Action) => {
// 				expect(data.type).toBe(ProjectsActions.getProjectSucces);
// 				expect((data as any).project).toEqual(aProjectMock);
// 				expect(spyGetProject).toHaveBeenCalledWith(id);

// 				setTimeout(() => sub.unsubscribe());

// 				done();
// 			});
// 		});

// 		it('should store the error when the request fails', async(done: jest.DoneCallback) => {
// 			const id = aProjectMock.id;
// 			const spyGetProject = spyOn(service, 'getProject').and.returnValue(throwError(aErrorMock));

// 			actions = new BehaviorSubject(getProject({ id }));

// 			const sub = effects.getProject$.subscribe((data: Action) => {
// 				expect(data.type).toBe(ProjectsActions.getProjectFailed);
// 				expect((data as any).error.status).toEqual(404);
// 				expect(spyGetProject).toHaveBeenCalledWith(id);

// 				setTimeout(() => sub.unsubscribe());

// 				done();
// 			});
// 		});
// 	});

// 	describe('getProjectFailed$', () => {
// 		it('should redirect to the 404 not-found page', (done: jest.DoneCallback) => {
// 			const spyNavigate = spyOn(router, 'navigate');
// 			actions = new BehaviorSubject(getProjectFailed({ error: null }));

// 			const sub = effects.getProjectFailed$.subscribe(() => {
// 				setTimeout(() => sub.unsubscribe());

// 				done();
// 			});

// 			expect(spyNavigate).toHaveBeenCalledWith(['/not-found']);
// 		});
// 	});

// 	describe('refreshProject$', () => {
// 		it('should store the fetched project', async(done: jest.DoneCallback) => {
// 			const id = aProjectMock.id;
// 			const spyRefreshProject = spyOn(service, 'getProject').and.returnValue(of(aProjectMock));

// 			actions = new BehaviorSubject(refreshProject({ id }));

// 			const sub = effects.refreshProject$.subscribe((data: Action) => {
// 				expect(data.type).toBe(ProjectsActions.refreshProjectSucces);
// 				expect((data as any).project).toEqual(aProjectMock);
// 				expect(spyRefreshProject).toHaveBeenCalledWith(id);

// 				setTimeout(() => sub.unsubscribe());

// 				done();
// 			});
// 		});

// 		it('should store the error when the request fails', async(done: jest.DoneCallback) => {
// 			const id = aProjectMock.id;
// 			const spyRefreshProject = spyOn(service, 'getProject').and.returnValue(throwError(aErrorMock));

// 			actions = new BehaviorSubject(refreshProject({ id }));

// 			const sub = effects.refreshProject$.subscribe((data: Action) => {
// 				expect(data.type).toBe(ProjectsActions.refreshProjectFailed);
// 				expect((data as any).error.status).toEqual(404);
// 				expect(spyRefreshProject).toHaveBeenCalledWith(id);

// 				setTimeout(() => sub.unsubscribe());

// 				done();
// 			});
// 		});
// 	});

// 	describe('getProjects$', () => {
// 		it('should store the fetched project', async(done: jest.DoneCallback) => {
// 			const spyGetProjects = spyOn(service, 'getProjects').and.returnValue(of(aProjectsMock));
// 			actions = new BehaviorSubject(getProjects({ filters: aProjectFilterMock}));


// 			const sub = effects.getProjects$.subscribe((data: Action) => {
// 				expect(data.type).toBe(ProjectsActions.getProjectsSucces);
// 				expect((data as any).projects).toEqual(aProjectsMock);
// 				expect(spyGetProjects).toHaveBeenCalledWith(aProjectFilterMock);

// 				setTimeout(() => sub.unsubscribe());

// 				done();
// 			});
// 		});

// 		it('should store the error when the request fails', async(done: jest.DoneCallback) => {
// 			const spyGetProjects = spyOn(service, 'getProjects').and.returnValue(throwError(aErrorMock));
// 			actions = new BehaviorSubject(getProjects({ filters: aProjectFilterMock}));

// 			const sub = effects.getProjects$.subscribe((data: Action) => {
// 				expect(data.type).toBe(ProjectsActions.getProjectsFailed);
// 				expect((data as any).error.status).toEqual(404);
// 				expect(spyGetProjects).toHaveBeenCalledWith(aProjectFilterMock);

// 				setTimeout(() => sub.unsubscribe());

// 				done();
// 			});
// 		});
// 	});

// });
