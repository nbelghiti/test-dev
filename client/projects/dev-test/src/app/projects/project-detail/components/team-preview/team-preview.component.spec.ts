import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { LinkModule, LoaderModule, RowModule, TeamModule } from 'adb-ui';

import { MemberRoles } from '~/core/user/services/permissions/permissions.types';
import { ITeam } from '~/repositories/teams/services/teams.types';

import { TeamPreviewComponent } from './team-preview.component';

describe('FieldSelectionComponent', () => {
	let fixture: ComponentFixture<TeamPreviewComponent>;
	let component: TeamPreviewComponent;

	beforeEach((() => {
		TestBed.configureTestingModule({
			imports: [
				// Begin: UI Modules
				LoaderModule,
				TeamModule,
				LinkModule,
				RowModule,
				// End: UI Modules
				HttpClientTestingModule,
				RouterTestingModule,
				TranslateModule.forRoot(),
			],
			declarations: [
				TeamPreviewComponent,
			],
		})
		.compileComponents();
	}));

	describe('init', () => {
		describe('loading state', () => {
			beforeEach(() => {
				fixture = TestBed.createComponent(TeamPreviewComponent);
				component = fixture.componentInstance;
				component.loading = true;

				fixture.detectChanges();
			});

			it('should create', () => {
				expect(component).toBeDefined();
			});

			it('should show the loader', () => {
				expect(
					fixture.debugElement.query(By.css('ui-loader'))
				).toBeTruthy();
				expect(
					fixture.debugElement.query(By.css('ui-team'))
				).toBeFalsy();
			});
		});

		describe('without a team', () => {
			beforeEach(() => {
				fixture = TestBed.createComponent(TeamPreviewComponent);
				component = fixture.componentInstance;
				component.loading = false;

				fixture.detectChanges();
			});

			it('should create', () => {
				expect(component).toBeDefined();
			});

			it('should show a fallback message', () => {
				expect(
					fixture.debugElement.query(By.css('ui-team'))
				).toBeFalsy();

				expect(
					fixture.debugElement.query(By.css('p')).nativeElement.innerHTML
				).toBe('TEAM__FALLBACK');
			});
		});

		describe('without members', () => {
			beforeEach(() => {
				fixture = TestBed.createComponent(TeamPreviewComponent);
				component = fixture.componentInstance;
				component.loading = false;
				component.team = {
					members: []
				} as ITeam;

				fixture.detectChanges();
			});

			it('should create', () => {
				expect(component).toBeDefined();
			});

			it('should show a fallback message', () => {
				expect(
					fixture.debugElement.query(By.css('ui-team'))
				).toBeFalsy();

				expect(
					fixture.debugElement.query(By.css('p')).nativeElement.innerHTML
				).toBe('TEAM__PACKAGE__FALLBACK');
			});
		});

		describe('with members', () => {
			beforeEach(() => {
				fixture = TestBed.createComponent(TeamPreviewComponent);
				component = fixture.componentInstance;
				component.loading = false;
				component.team = {
					members: [{
						id: 'id',
						name: 'name',
						email: 'email',
						picture: 'picture',
						type: MemberRoles.engineer,
						packageId: 'packageId',
						teamId: 'teamId',
						auth0Id: 'auth0Id',
						management: true,
					}],
				} as ITeam;

				fixture.detectChanges();
			});

			it('should create', () => {
				expect(component).toBeDefined();
			});

			it('should show a fallback message', () => {
				expect(
					fixture.debugElement.query(By.css('ui-team'))
				).toBeTruthy();
			});
		});

		describe('with a link', () => {
			beforeEach(() => {
				fixture = TestBed.createComponent(TeamPreviewComponent);
				component = fixture.componentInstance;
				component.loading = false;
				component.team = {
					members: [{
						id: 'id',
						name: 'name',
						email: 'email',
						picture: 'picture',
						type: MemberRoles.engineer,
						packageId: 'packageId',
						teamId: 'teamId',
						auth0Id: 'auth0Id',
						management: true,
					}],
				} as ITeam;
				component.link = {
					to: ['test', 'route'],
					label: 'this is my link',
				};

				fixture.detectChanges();
			});

			it('should create', () => {
				expect(component).toBeDefined();
			});

			it('should show a link', () => {
				expect(
					fixture.debugElement.query(By.css('ui-link'))
				).toBeTruthy();

				expect(
					fixture.debugElement.query(By.css('ui-link a span')).nativeElement.innerHTML
				).toBe(component.link.label);

				expect(
					fixture.debugElement.query(By.css('ui-link a')).nativeElement.href
				).toBe('https://github.com/test/route');
			});
		});
	});
});
