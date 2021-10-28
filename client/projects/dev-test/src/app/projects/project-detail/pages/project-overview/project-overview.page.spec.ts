import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MockPipe } from 'ng-mocks';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import {
	AccordionModule,
	ButtonModule,
	CardModule,
	DialogService,
	EmptyStateModule,
	HeadingModule,
	IconModule,
	InfoAccordionModule,
	InfoButtonModule,
	InfoLinkModule,
	LinkModule,
	LoaderModule,
	ProjectInfoModule,
	RowModule,
	SidebarModule,
	TabsModule,
	TeamModule,
	UploadModule,
} from 'adb-ui';

import { ContextFacade } from '~/core/context/facades/context.facade';
import { mockContextFacade } from '~/core/context/facades/context.facade.mock';
import { RouterFacade } from '~/core/router/facades/router.facade';
import { mockRouterFacade } from '~/core/router/facades/router.facade.mock';
import { AccessManagementDirective } from '~/core/user/directives/access-management/access-management.directive';
import { UserFacade } from '~/core/user/facades/user.facade';
import { mockUserFacade } from '~/core/user/facades/user.facade.mock';
import { AccessManagementService } from '~/core/user/services/access-management/access-management.service';
import { ProjectsFacade } from '~/projects/projects-shared/facades/projects/projects.facade';
import { mockProjectsFacade } from '~/projects/projects-shared/facades/projects/projects.facade.mock';
import { TeamsFacade } from '~/projects/projects-shared/facades/teams/teams.facade';
import { mockTeamsFacade } from '~/projects/projects-shared/facades/teams/teams.facade.mock';
import { ProjectRouter } from '~/projects/projects-shared/services/project-router/project-router.service';
import { DateTimePipe } from '~/shared/pipes/date-time/date-time.pipe';
import { FileService } from '~/shared/services/file/file.service';

import { TeamPreviewComponent } from '../../components/team-preview/team-preview.component';

import { ProjectOverviewPage } from './project-overview.page';

describe('ProjectOverviewPage', () => {
	let fixture: ComponentFixture<ProjectOverviewPage>;
	let component: ProjectOverviewPage;
	let contextFacade: ContextFacade;
	let projectsFacade: ProjectsFacade;
	let routerFacade: RouterFacade;
	let dialogService: DialogService;
	let router: Router;
	let translate: TranslateService;
	let teamsFacade: TeamsFacade;
	let projectRouter: ProjectRouter;
	let accessManagementService: AccessManagementService;
	let mockToastr: Partial<ToastrService>;

	beforeEach(() => {
		mockToastr = {
			error: jest.fn(),
			success: jest.fn(),
		};

		TestBed.configureTestingModule({
			imports: [
				// Begin: UI Modules
				InfoLinkModule,
				InfoButtonModule,
				SidebarModule,
				LinkModule,
				RowModule,
				EmptyStateModule,
				AccordionModule,
				TabsModule,
				LoaderModule,
				ProjectInfoModule,
				InfoAccordionModule,
				HeadingModule,
				ButtonModule,
				IconModule,
				CardModule,
				TeamModule,
				UploadModule,
				// End: UI Modules
				HttpClientTestingModule,
				RouterTestingModule,
				FormsModule,
				ReactiveFormsModule,
				TranslateModule.forRoot(),
				ToastrModule.forRoot(),
			],
			declarations: [
				ProjectOverviewPage,
				TeamPreviewComponent,
				AccessManagementDirective,
				MockPipe(DateTimePipe),
			],
			providers: [{
				provide: ContextFacade,
				useValue: mockContextFacade,
			}, {
				provide: ProjectsFacade,
				useValue: mockProjectsFacade(),
			}, {
				provide: RouterFacade,
				useValue: mockRouterFacade,
			}, {
				provide: TeamsFacade,
				useValue: mockTeamsFacade(),
			}, {
				provide: UserFacade,
				useValue: mockUserFacade,
			}, {
				provide: ToastrService,
				useValue: mockToastr,
			},
				DialogService,
				TranslateService,
				ProjectRouter,
				AccessManagementService,
				FileService,
			],
		})
		.compileComponents();

		// Get the providers from the TestBed
		contextFacade = TestBed.get(ContextFacade);
		projectsFacade = TestBed.get(ProjectsFacade);
		routerFacade = TestBed.get(RouterFacade);
		dialogService = TestBed.get(DialogService);
		router = TestBed.get(Router);
		translate = TestBed.get(TranslateService);
		teamsFacade = TestBed.get(TeamsFacade);
		projectRouter = TestBed.get(ProjectRouter);
		accessManagementService = TestBed.get(AccessManagementService);
	});

	afterEach(() => {
		jest.resetAllMocks();
	});

	describe('init', () => {
		let paramsChangedSpy;
		let selectOneProjectSpy;

		beforeEach(() => {
			// Spy on the methods called in the constructor and return a value that corresponds with what they expect
			paramsChangedSpy = jest.spyOn(routerFacade, 'onParamsChanged');
			selectOneProjectSpy = jest.spyOn(projectsFacade, 'selectOne');

			// Create the component
			fixture = TestBed.createComponent(ProjectOverviewPage);
			component = fixture.componentInstance;

			fixture.detectChanges();
		});

		it('should create', () => {
			expect(component).toBeDefined();
		});

		it('should get all data', () => {
			expect(paramsChangedSpy).toHaveBeenCalled();
			expect(selectOneProjectSpy).toHaveBeenCalled();
		});

		it('should set the header info', () => {
			expect(mockContextFacade.setHeaderInfo).toHaveBeenCalledTimes(2);
			expect(mockContextFacade.setHeaderInfo).toHaveBeenLastCalledWith({
				title: 'project-name',
				backLink: '/projects',
				home: true,
				breadcrumb: null,
			});
		});
	});

	describe('destroy', () => {
		beforeEach(() => {
			fixture = TestBed.createComponent(ProjectOverviewPage);
			component = fixture.componentInstance;

			fixture.detectChanges();
		});

		it('should set a value to the destroyed$ Subject, destroying all subscriptions', async(done: jest.DoneCallback) => {
			const testSub = component['destroyed$']
				.subscribe((triggered: boolean) => {
					expect(triggered).toBe(true);

					testSub.unsubscribe();

					done();
				});

			component.ngOnDestroy();
		});
	});
});
describe('with error, not loading', () => {
	let mockToastr: Partial<ToastrService>;

	beforeEach(() => {
		mockToastr = {
			error: jest.fn(),
			success: jest.fn(),
		};

		TestBed.configureTestingModule({
			imports: [
				// Begin: UI Modules
				InfoLinkModule,
				InfoButtonModule,
				SidebarModule,
				LinkModule,
				RowModule,
				EmptyStateModule,
				AccordionModule,
				TabsModule,
				LoaderModule,
				ProjectInfoModule,
				InfoAccordionModule,
				HeadingModule,
				ButtonModule,
				IconModule,
				CardModule,
				TeamModule,
				UploadModule,
				// End: UI Modules
				HttpClientTestingModule,
				RouterTestingModule,
				FormsModule,
				ReactiveFormsModule,
				TranslateModule.forRoot(),
				ToastrModule.forRoot(),
			],
			declarations: [
				ProjectOverviewPage,
				TeamPreviewComponent,
				AccessManagementDirective,
				MockPipe(DateTimePipe),
			],
			providers: [{
				provide: ContextFacade,
				useValue: mockContextFacade,
			}, {
				provide: ProjectsFacade,
				useValue: mockProjectsFacade(),
			}, {
				provide: RouterFacade,
				useValue: mockRouterFacade,
			}, {
				provide: TeamsFacade,
				useValue: mockTeamsFacade,
			}, {
				provide: UserFacade,
				useValue: mockUserFacade,
			},
				TranslateService,
			],
		})
		.compileComponents();
	});

	afterEach(() => {
		jest.resetAllMocks();
	});
});
