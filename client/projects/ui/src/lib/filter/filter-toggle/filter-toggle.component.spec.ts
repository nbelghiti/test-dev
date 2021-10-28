import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { IconComponent } from '../../icon/icon.component';

import { FilterToggleComponent } from './filter-toggle.component';

describe('UserInfoComponent', () => {
	let component: FilterToggleComponent;
	let fixture: ComponentFixture<FilterToggleComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				FilterToggleComponent,
				IconComponent,
			],
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FilterToggleComponent);
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

