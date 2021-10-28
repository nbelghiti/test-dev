import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { text } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { UIModule } from 'adb-ui';

storiesOf('Components|Search', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
				ReactiveFormsModule,
				RouterModule.forRoot([], { useHash: true }),
			],
		}),
	)
	.add('content', () => ({
		template: `
			<ui-search-content>
				<p>Test content</p>
			</ui-search-content>
		`,
	}))
	.add('indicator', () => ({
		template: `
			<ui-search-indicator></ui-search-indicator>
		`,
	}))
	.add('group', () => ({
		template: `
			<ui-search-group [title]="title">
				<small>Use prefix "in:" to search directly in a project</small>
			</ui-search-group>
		`,
		props: {
			title: text('Group title', 'Recent searches')
		}
	}))
	.add('field', () => ({
		template: `
			<ui-search-field
				[placeholder]="placeholder"
				[formControl]="query"
				[tagKey]="project"
			>
			</ui-search-field>
		`,
		props: {
			placeholder: text('Placeholder', 'Search for a project, component or inputfield'),
			query: new FormControl(null),
		}
	}))
	.add('query', () => ({
		template: `
			<ui-search-query
				[text]="text"
				[tag]="tag"
			>
			</ui-search-query>
		`,
		props: {
			text: text('Text', 'Cylindrical length'),
			tag: text('Tag text', 'Waad Al Shamal')
		}
	}))
	.add('result', () => ({
		template: `
			<ui-search-result
				[breadcrumb]="breadcrumb"
				content="<b>Cylin</b>drical length"
			>
			</ui-search-result>
		`,
		props: {
			breadcrumb: text('Breadcrumb', 'Waad Al Shamal / 520-Tanks / 521 Condensate tanks'),
		}
	}));
