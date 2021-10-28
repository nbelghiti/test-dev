import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { getInitials } from '../avatar/avatar.utils';
import { HeadingComponent } from '../heading/heading.component';
import { IconComponent } from '../icon/icon.component';

import { UserInfoComponent } from './user-info.component';

describe('UserInfoComponent', () => {
	let component: UserInfoComponent;
	let fixture: ComponentFixture<UserInfoComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				UserInfoComponent,
				IconComponent,
				HeadingComponent,
			],
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(UserInfoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('Should render correctly', () => {
		expect(fixture).toMatchSnapshot();
	});

	it('Should get the initials correctly', () => {
		component.user = {
			name: 'John Doe',
		};

		component.ngOnInit();

		expect(component.initials).toEqual('JD');

		expect(getInitials('John Doe')).toEqual('JD');
		expect(getInitials('John Doe The Second')).toEqual('JS');
	});
});

