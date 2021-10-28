import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { FilterMenuItemComponent } from '../../filter/filter-menu-item/filter-menu-item.component';
import { FilterMenuComponent } from '../../filter/filter-menu/filter-menu.component';
import { IconComponent } from '../../icon/icon.component';

import { BreadcrumbItemComponent } from './breadcrumb-item.component';

describe('BreadcrumbItemComponent', () => {
	let component: BreadcrumbItemComponent;
	let fixture: ComponentFixture<BreadcrumbItemComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				ReactiveFormsModule,
			],
			declarations: [
				BreadcrumbItemComponent,
				IconComponent,
				FilterMenuComponent,
				FilterMenuItemComponent,
			],
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BreadcrumbItemComponent);
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

