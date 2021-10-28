import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { FlyoutModule } from '../../flyout/flyout.module';
import { IconComponent } from '../../icon/icon.component';
import { FilterToggleComponent } from '../filter-toggle/filter-toggle.component';

import { FilterComponent } from './filter.component';

describe('FilterComponent', () => {
	let component: FilterComponent;
	let fixture: ComponentFixture<FilterComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				FlyoutModule,
			],
			declarations: [
				FilterComponent,
				FilterToggleComponent,
				IconComponent,
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FilterComponent);
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
