import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { IconComponent } from '../../icon/icon.component';

import { SearchContentComponent } from './search-content.component';

describe('SearchContentComponent', () => {
	let component: SearchContentComponent;
	let fixture: ComponentFixture<SearchContentComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
		declarations: [
			SearchContentComponent,
			IconComponent,
		]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SearchContentComponent);
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
