import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { AvatarComponent } from '../avatar/avatar.component';
import { IconComponent } from '../icon/icon.component';
import { UserComponent } from '../user/user.component';

import { FilterSelectComponent } from './filter-select.component';

describe('FilterSelectComponent', () => {
	let component: FilterSelectComponent;
	let fixture: ComponentFixture<FilterSelectComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				ReactiveFormsModule,
				TranslateModule,
			],
			declarations: [
				FilterSelectComponent,
				IconComponent,
				UserComponent,
				AvatarComponent
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FilterSelectComponent);
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
