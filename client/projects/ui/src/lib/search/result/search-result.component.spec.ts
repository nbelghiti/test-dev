import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SearchResultComponent } from './search-result.component';

describe('SearchResultComponent', () => {
	let component: SearchResultComponent;
	let fixture: ComponentFixture<SearchResultComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule
			],
			declarations: [
				SearchResultComponent,
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SearchResultComponent);
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
