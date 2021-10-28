import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IconComponent } from '../../icon/icon.component';

import { SearchFieldComponent } from './search-field.component';

describe('SearchFieldComponent', () => {
	let component: SearchFieldComponent;
	let fixture: ComponentFixture<SearchFieldComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				FormsModule,
				ReactiveFormsModule
			],
			declarations: [
				SearchFieldComponent,
				IconComponent,
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SearchFieldComponent);
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
