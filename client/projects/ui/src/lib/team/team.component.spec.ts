import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { AvatarComponent } from '../avatar/avatar.component';
import { EmptyStateComponent } from '../empty-state/empty-state.component';
import { IconComponent } from '../icon/icon.component';
import { UserTagComponent } from '../user-tag/user-tag.component';
import { UserComponent } from '../user/user.component';

import { TeamComponent } from './team.component';

describe('TeamComponent', () => {
	let component: TeamComponent;
	let fixture: ComponentFixture<TeamComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				TranslateModule.forRoot(),
				RouterTestingModule
			],
			declarations: [
				UserComponent,
				UserTagComponent,
				TeamComponent,
				EmptyStateComponent,
				AvatarComponent,
				IconComponent
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TeamComponent);
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
