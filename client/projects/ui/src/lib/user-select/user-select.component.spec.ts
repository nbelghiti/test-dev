import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { AvatarComponent } from '../avatar/avatar.component';
import { IconButtonComponent } from '../button/icon-button/icon-button.component';
import { EmptyStateComponent } from '../empty-state/empty-state.component';
import { FlyoutModule } from '../flyout/flyout.module';
import { IconComponent } from '../icon/icon.component';
import { UserComponent } from '../user/user.component';

import { UserSelectComponent } from './user-select.component';

const mockUser = {
	name: 'John',
	role: '',
	type: 'engineer',
	myself: false,
};

const mockUsers = [
	mockUser,
	mockUser,
	mockUser,
];

describe('UserSelectComponent', () => {
	let component: UserSelectComponent;
	let fixture: ComponentFixture<UserSelectComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				FlyoutModule,
				ReactiveFormsModule,
				TranslateModule.forRoot(),
				RouterTestingModule
			],
			declarations: [
				UserSelectComponent,
				AvatarComponent,
				IconComponent,
				IconButtonComponent,
				UserComponent,
				EmptyStateComponent
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(UserSelectComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('Should render correctly', () => {
		expect(fixture).toMatchSnapshot();
	});

	describe('init', () => {
		describe('without selected user', () => {
			beforeEach(() => {
				fixture = TestBed.createComponent(UserSelectComponent);
				component = fixture.componentInstance;

				fixture.detectChanges();
			});

			it('should create', () => {
				expect(component).toBeDefined();
			});

			it('should render', () => {
				expect(fixture).toMatchSnapshot();
			});

			it('should render an empty state with an input field when no selected user is provided', () => {
				expect(
					fixture.debugElement.query(By.css('input'))
				).toBeTruthy();
			});

			it('should not render an icon button to remove the user when no selected user is provided', () => {
				expect(
					fixture.debugElement.query(By.css('ui-icon-button'))
				).toBeFalsy();
			});
		});

		describe('with selected user', () => {
			beforeEach(() => {
				fixture = TestBed.createComponent(UserSelectComponent);
				component = fixture.componentInstance;
				component.selectedUser = mockUser;

				fixture.detectChanges();
			});

			it('should create', () => {
				expect(component).toBeDefined();
			});

			it('should render', () => {
				expect(fixture).toMatchSnapshot();
			});

			it('should not render an empty state with an input field when selected user is provided', () => {
				expect(
					fixture.debugElement.query(By.css('input'))
				).toBeFalsy();
			});

			it('should render an icon button to remove the user when selected user is provided', () => {
				expect(
					fixture.debugElement.query(By.css('ui-icon-button'))
				).toBeTruthy();
			});
		});

		describe('without users', () => {
			beforeEach(() => {
				fixture = TestBed.createComponent(UserSelectComponent);
				component = fixture.componentInstance;

				fixture.detectChanges();
			});

			it('should create', () => {
				expect(component).toBeDefined();
			});

			it('should render', () => {
				expect(fixture).toMatchSnapshot();
			});

			it('should render an empty state component when no users are provided', () => {
				expect(
					fixture.debugElement.query(By.css('ui-empty-state'))
				).toBeTruthy();
			});

			it('should not render a ui-user component when no users are provided', () => {
				expect(
					fixture.debugElement.query(By.css('ui-user'))
				).toBeFalsy();
			});
		});

		describe('with users', () => {
			beforeEach(() => {
				fixture = TestBed.createComponent(UserSelectComponent);
				component = fixture.componentInstance;
				component.users = mockUsers;

				fixture.detectChanges();
			});

			it('should create', () => {
				expect(component).toBeDefined();
			});

			it('should render', () => {
				expect(fixture).toMatchSnapshot();
			});

			it('should not render an empty state component when users are provided', () => {
				expect(
					fixture.debugElement.query(By.css('ui-empty-state'))
				).toBeFalsy();
			});

			it('should render a ui-user component when users are provided', () => {
				expect(
					fixture.debugElement.query(By.css('ui-user'))
				).toBeTruthy();
			});
		});
	});

	it('Should call the onChange method correctly', () => {
		expect(component.searchQuery.value).toEqual('');

		component.searchQuery.setValue('new value');

		expect(component.searchQuery.value).toEqual('new value');
	});

	it('Should call the clickUser method correctly', () => {
		expect(component.selectedUser).toEqual(null);

		component.clickUser(mockUser);

		expect(component.selectedUser).toEqual(mockUser);
	});
});
