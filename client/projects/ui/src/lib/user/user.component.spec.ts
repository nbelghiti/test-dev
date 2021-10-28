import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { AvatarComponent } from '../avatar/avatar.component';

import { UserComponent } from './user.component';

const mockUser = {
	name: 'John',
	role: '',
	type: 'engineer',
	myself: false,
};

describe('UserComponent', () => {
	let component: UserComponent;
	let fixture: ComponentFixture<UserComponent>;
	let translate: TranslateService;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				TranslateModule.forRoot(),
			],
			declarations: [
				AvatarComponent,
				UserComponent
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
		fixture = TestBed.createComponent(UserComponent);
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
