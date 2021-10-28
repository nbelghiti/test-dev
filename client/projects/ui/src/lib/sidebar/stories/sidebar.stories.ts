import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { boolean, object, select, text } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { UIModule } from 'adb-ui';

import { IconName } from '../../icon/icon.types';

storiesOf('Components|Sidebar', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
				RouterModule.forRoot([], { useHash: true }),
				TranslateModule.forRoot(),
			],
		}),
	).add('default', () => ({
		template: `
			<div class='l-sheet' style="height: 95vh">
				<div class='l-sheet__content l-container'>
					<p>Content</p>
				</div>

				<ui-sidebar>
					<ui-loader>
						<ui-project-info
							[title]="title"
							[imageSrc]="imageSrc"
							[project]="project"
							[phase]="project?.status"
						>
						</ui-project-info>

						<ui-info-link
							[icon]="firstIcon"
							[title]="firstTitle"
						>
						</ui-info-link>

						<ui-info-accordion
							[icon]="secondIcon"
							[title]="secondTitle"
						>
							<ui-loader>
								<ui-team [team]='team.members' [title]='team.title'></ui-team>

								<div
									*ngIf="team$ | async as team"
									class="u-margin-top-1x"
								>
									<ui-row contentAfter="true">
										<ui-link contentAfter
											[iconAfter]="iconAfter"
											label="See all team members"
										>
										</ui-link>
									</ui-row>
								</div>
							</ui-loader>
						</ui-info-accordion>

						<ng-container>
							<ui-info-link
								[icon]="fourthIcon"
								[title]="fourthTitle"
							>
							</ui-info-link>
						</ng-container>
					</ui-loader>

					<ng-container ngProjectAs="actions">
						<ui-info-link
							[grey]="grey"
							[arrow]="arrow"
							[icon]="thirdIcon"
							[title]="thirdTitle"
						>
						</ui-info-link>
					</ng-container>
				</ui-sidebar>
			</div>
		`,
		props: {
			title: text('Title', 'Branch started: 18-09-2019 11:38'),
			imageSrc: text('Image URL', 'https://picsum.photos/500'),
			project: object('Project', {
				general: {
					VaultNumber: 'WB1-101-000501-DSH0010',
				},
				status: text('Project status', 'Engineering'),
			}),
			firstIcon: select('first icon', IconName as any, IconName.codeBranch),
			firstTitle: text('first tab', 'Merge history'),
			secondIcon: select('second icon', IconName as any, IconName.users),
			secondTitle: text('second tab', 'Project team'),
			iconAfter: select('link icon', IconName as any, IconName.chevronRight),
			thirdTitle: text('third tab', 'Export project'),
			thirdIcon: select('third icon', IconName as any, IconName.download),
			fourthTitle: text('fourth tab', 'Edit project'),
			fourthIcon: select('fourth icon', IconName as any, IconName.pen),
			grey: boolean('Grey', true),
			arrow: boolean('Arrow', false),
			team: object('Team', {
				title: 'Management',
				members: [
					{
						name: 'John Doe',
						role: 'Head engineer',
						myself: true,
					},
					{
						name: 'John Doe',
						role: 'Engineer',
						myself: false,
					},
				],
			}),
		},
	}));
