import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { HeadingComponent } from '../heading/heading.component';
import { IconComponent } from '../icon/icon.component';

import { InfoButtonComponent } from './info-button.component';

describe('InfoButtonComponent', () => {
	let component: InfoButtonComponent;
	let fixture: ComponentFixture<InfoButtonComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				InfoButtonComponent,
				IconComponent,
				HeadingComponent,
			],
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(InfoButtonComponent);
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

