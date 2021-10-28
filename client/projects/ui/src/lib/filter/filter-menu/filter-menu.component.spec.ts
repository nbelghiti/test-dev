import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { IconComponent } from '../../icon/icon.component';
import { FilterMenuItemComponent } from '../filter-menu-item/filter-menu-item.component';

import { FilterMenuComponent } from './filter-menu.component';

describe('FilterMenuComponent', () => {
	let component: FilterMenuComponent;
	let fixture: ComponentFixture<FilterMenuComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
			],
			declarations: [
				FilterMenuComponent,
				FilterMenuItemComponent,
				IconComponent,
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FilterMenuComponent);
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
