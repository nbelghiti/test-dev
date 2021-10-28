import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { IconComponent } from '../../icon/icon.component';

import { SearchIndicatorComponent } from './search-indicator.component';

describe('SearchIndicatorComponent', () => {
	let component: SearchIndicatorComponent;
	let fixture: ComponentFixture<SearchIndicatorComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
		declarations: [
			SearchIndicatorComponent,
			IconComponent,
		]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SearchIndicatorComponent);
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
