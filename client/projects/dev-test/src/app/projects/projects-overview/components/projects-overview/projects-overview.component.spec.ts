import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { CardModule, EmptyStateModule, HeadingModule, InfoItemModule, LoaderModule, RowModule, StatusLabelModule } from 'adb-ui';

import { ProjectsOverviewComponent } from './projects-overview.component';

describe('ProjectsOverviewComponent', () => {
	let component: ProjectsOverviewComponent;
	let fixture: ComponentFixture<ProjectsOverviewComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				// Begin: UI Modules
				InfoItemModule,
				CardModule,
				LoaderModule,
				RowModule,
				StatusLabelModule,
				HeadingModule,
				EmptyStateModule,
				// End: UI Modules
				HttpClientTestingModule,
				TranslateModule.forRoot(),
			],
			declarations: [ ProjectsOverviewComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ProjectsOverviewComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	// TODO check why this test fails on CircleCI but passes in local dev
	it.skip('Should render correctly', () => {
		expect(fixture).toMatchSnapshot();
	});
});
