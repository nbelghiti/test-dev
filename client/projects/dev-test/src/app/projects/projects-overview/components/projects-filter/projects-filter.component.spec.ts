import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { FilterModule } from 'adb-ui';

import { ProjectsFilterComponent } from './projects-filter.component';

describe('ProjectsFilterComponent', () => {
	let component: ProjectsFilterComponent;
	let fixture: ComponentFixture<ProjectsFilterComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				// Begin: UI Modules
				FilterModule,
				// End: UI Modules
				HttpClientTestingModule,
				TranslateModule.forRoot(),
				FormsModule,
				ReactiveFormsModule,
			],
			declarations: [ ProjectsFilterComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ProjectsFilterComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('Should render correctly', () => {
		expect(fixture).toMatchSnapshot();
	});
});
