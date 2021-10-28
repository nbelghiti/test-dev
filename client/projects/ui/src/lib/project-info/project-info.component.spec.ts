import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { IconComponent } from '../icon/icon.component';
import { StatusLabelComponent } from '../status-label/status-label.component';

import { ProjectInfoComponent } from './project-info.component';

describe('ProjectInfoComponent', () => {
	let component: ProjectInfoComponent;
	let fixture: ComponentFixture<ProjectInfoComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				TranslateModule.forRoot(),
			],
			declarations: [
				IconComponent,
				StatusLabelComponent,
				ProjectInfoComponent,
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ProjectInfoComponent);
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
