import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { ButtonModule, CardModule, LoaderModule, RowModule, TeamModule } from 'adb-ui';

import { TeamOverviewComponent } from './team-overview.component';

describe('FieldSelectionComponent', () => {
	let fixture: ComponentFixture<TeamOverviewComponent>;
	let component: TeamOverviewComponent;

	beforeEach((() => {
		TestBed.configureTestingModule({
			imports: [
				// Begin: UI Modules
				ButtonModule,
				TeamModule,
				CardModule,
				LoaderModule,
				RowModule,
				// End: UI Modules
				HttpClientTestingModule,
				RouterTestingModule,
				TranslateModule.forRoot(),
			],
			declarations: [
				TeamOverviewComponent,
			],
		})
		.compileComponents();
	}));

	describe('init', () => {
		describe('loading state', () => {
			beforeEach(() => {
				fixture = TestBed.createComponent(TeamOverviewComponent);
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
					fixture.debugElement.query(By.css('.l-content'))
				).toBeFalsy();
			});
		});

		describe('without a valid link', () => {
			beforeEach(() => {
				fixture = TestBed.createComponent(TeamOverviewComponent);
				component = fixture.componentInstance;

				component.editLink = null;

				fixture.detectChanges();
			});

			it('should create', () => {
				expect(component).toBeDefined();
			});

			it('should not show the button', () => {
				expect(
					fixture.debugElement.query(By.css('ui-button'))
				).toBeFalsy();
			});
		});

		describe('without a team', () => {
			beforeEach(() => {
				fixture = TestBed.createComponent(TeamOverviewComponent);
				component = fixture.componentInstance;

				component.editLink = {
					label: 'a link',
					to: 'somewhere/'
				};
				component.teams = null;

				fixture.detectChanges();
			});

			it('should create', () => {
				expect(component).toBeDefined();
			});

			it('should show the edit button and the team fallback', () => {
				expect(
					fixture.debugElement.query(By.css('ui-button'))
				).toBeTruthy();
				expect(
					fixture.debugElement.query(By.css('p')).nativeElement.innerHTML
				).toBe('TEAM__FALLBACK');
			});
		});

		describe('with a team', () => {
			beforeEach(() => {
				fixture = TestBed.createComponent(TeamOverviewComponent);
				component = fixture.componentInstance;

				component.editLink = {
					label: 'a link',
					to: 'somewhere/'
				};
				component.teams = [{
					title: 'A First Team',
					members: [],
				}];

				fixture.detectChanges();
			});

			it('should create', () => {
				expect(component).toBeDefined();
			});

			it('should show the edit button and the team', () => {
				expect(
					fixture.debugElement.query(By.css('ui-button'))
				).toBeTruthy();
				expect(
					fixture.debugElement.query(By.css('ui-team'))
				).toBeTruthy();
			});
		});
	});
});
