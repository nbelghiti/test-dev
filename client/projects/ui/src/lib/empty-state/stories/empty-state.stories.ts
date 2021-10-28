import { boolean, select, text } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { IconName, UIModule } from 'adb-ui';

storiesOf('Components|Empty State', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
			],
		}),
	)
	.add('default', () => ({
		template: `
			<ui-empty-state
				[icon]="icon"
				[message]="message"
				[smallIcon]="smallIcon"
			>
				Try removing some filters or changing your searchterm (client name,  project name, location...).
				<a href="#">Dit kan ook een linkje zijn</a>
			</ui-empty-state>
		`,
		props: {
			icon: select('Icon', IconName as any, IconName.search),
			message: text('Message', 'Oops, we haven’t found any project matching your search'),
			smallIcon: boolean('Small Icon', false),
		},
	}));
