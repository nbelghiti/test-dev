import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { AvatarComponent } from '../avatar/avatar.component';
import { IconComponent } from '../icon/icon.component';
import { UserComponent } from '../user/user.component';

import { UserTagComponent } from './user-tag.component';

const mockUser = {
	name: 'John',
	role: '',
	type: 'engineer',
	myself: false,
};

describe('UserTagComponent', () => {
	let component: UserTagComponent;
	let fixture: ComponentFixture<UserTagComponent>;
	let translate: TranslateService;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				TranslateModule.forRoot(),
			],
			declarations: [
				IconComponent,
				UserComponent,
				UserTagComponent,
				AvatarComponent
			],
			providers: [
				TranslateService,
			]
		})
			.compileComponents();

		// Get the providers from the TestBed
		translate = TestBed.get(TranslateService);
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(UserTagComponent);
		component = fixture.componentInstance;
		component.user = mockUser;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('Should render correctly', () => {
		expect(fixture).toMatchSnapshot();
	});
});
