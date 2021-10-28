import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { IconComponent } from '../../icon/icon.component';

import { SearchQueryComponent } from './search-query.component';

describe('SearchQueryComponent', () => {
	let component: SearchQueryComponent;
	let fixture: ComponentFixture<SearchQueryComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
		imports: [ RouterTestingModule ],
		declarations: [
			SearchQueryComponent,
			IconComponent,
		]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SearchQueryComponent);
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
