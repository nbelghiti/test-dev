import { moduleMetadata, storiesOf } from '@storybook/angular';

import { UIModule } from 'adb-ui';

storiesOf('Building blocks|Row', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
			],
		}),
	)
	.add('Default with primary content', () => ({
		template: `
			<ui-row>This is content.</ui-row>
		`,
	}))
	.add('Default with before content', () => ({
		template: `
			<ui-row contentBefore="true">
				<ui-image contentBefore source="https://picsum.photos/100"></ui-image>

				This is content.
			</ui-row>
		`,
	}))
	.add('Default with after content', () => ({
		template: `
			<ui-row contentAfter="true">
				This is content.

				<ui-image contentAfter source="https://picsum.photos/100"></ui-image>
			</ui-row>
		`,
	}))
	.add('Align middle', () => ({
		template: `
			<ui-row
				contentBefore=true
				alignMiddle=true
			>
				<ui-image contentBefore source="https://picsum.photos/100"></ui-image>

				This is content.
			</ui-row>
		`,
	}))
	.add('Align bottom', () => ({
		template: `
			<ui-row
				contentBefore=true
				alignBottom=true
			>
				<ui-image contentBefore source="https://picsum.photos/100"></ui-image>

				This is content.
			</ui-row>
		`,
	}));
