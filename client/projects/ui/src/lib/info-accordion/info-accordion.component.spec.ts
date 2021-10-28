import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HeadingComponent } from '../heading/heading.component';
import { IconComponent } from '../icon/icon.component';

import { InfoAccordionComponent } from './info-accordion.component';

describe('InfoAccordionComponent', () => {
	let component: InfoAccordionComponent;
	let fixture: ComponentFixture<InfoAccordionComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
			],
			declarations: [
				InfoAccordionComponent,
				IconComponent,
				HeadingComponent,
			],
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(InfoAccordionComponent);
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

