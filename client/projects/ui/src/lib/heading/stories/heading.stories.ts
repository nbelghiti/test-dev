import { boolean, select, text } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { HeadingLevel, UIModule } from 'adb-ui';

storiesOf('Building blocks|Heading', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
			],
		}),
	)
	.add('Default', () => ({
		template: `
			<ui-heading
				[level]=level
				[title]=title
				[inline]=inline
				[loading]=loading
			>
				<small>Last edited: 22/09/2019</small>
			</ui-heading>

			<div style="padding-top: 5px;">
				<ui-heading
					[level]=level
					[title]=title
					[inline]=inline
					[loading]=loading
				>
					<a href="">80 files</a>
				</ui-heading>
			</div>
		`,
		props: {
			title: text('Title', 'Lorem ipsum porus erum'),
			inline: boolean('Inline', false),
			loading: boolean('Loading', false),
			level: select('Title level', HeadingLevel as any, HeadingLevel.heading3),
		},
	}));
