import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { ButtonComponent } from '../../button/button/button.component';
import { FilterMenuItemComponent } from '../../filter/filter-menu-item/filter-menu-item.component';
import { FilterMenuComponent } from '../../filter/filter-menu/filter-menu.component';
import { IconComponent } from '../../icon/icon.component';
import { BreadcrumbItemComponent } from '../breadcrumb-item/breadcrumb-item.component';

import { BreadcrumbComponent } from './breadcrumb.component';

describe('BreadcrumbComponent', () => {
	let component: BreadcrumbComponent;
	let fixture: ComponentFixture<BreadcrumbComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				ReactiveFormsModule,
				TranslateModule.forRoot(),
			],
			declarations: [
				BreadcrumbComponent,
				IconComponent,
				BreadcrumbItemComponent,
				FilterMenuItemComponent,
				FilterMenuComponent,
				ButtonComponent,
			],
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BreadcrumbComponent);
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

