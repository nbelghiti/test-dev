import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { IconComponent } from '../../icon/icon.component';

import { SearchGroupComponent } from './search-group.component';

describe('SearchGroupComponent', () => {
	let component: SearchGroupComponent;
	let fixture: ComponentFixture<SearchGroupComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
		declarations: [
			SearchGroupComponent,
			IconComponent,
		]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SearchGroupComponent);
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
