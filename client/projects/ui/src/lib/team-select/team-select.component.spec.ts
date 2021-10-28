import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { AvatarComponent } from '../avatar/avatar.component';
import { EmptyStateComponent } from '../empty-state/empty-state.component';
import { HeadingComponent } from '../heading/heading.component';
import { IconComponent } from '../icon/icon.component';
import { LinkComponent } from '../link/link.component';
import { UserComponent } from '../user/user.component';

import { TeamSelectComponent } from './team-select.component';

describe('TeamSelectComponent', () => {
	let component: TeamSelectComponent;
	let fixture: ComponentFixture<TeamSelectComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				TranslateModule.forRoot()
			],
			declarations: [
				UserComponent,
				AvatarComponent,
				HeadingComponent,
				IconComponent,
				LinkComponent,
				EmptyStateComponent,
				TeamSelectComponent
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TeamSelectComponent);
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
