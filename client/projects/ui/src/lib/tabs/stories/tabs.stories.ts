import { RouterModule } from '@angular/router';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { UIModule } from 'adb-ui';

storiesOf('Components|Tabs', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
				RouterModule.forRoot([], { useHash: true }),
			],
		}),
	)
	.add('tabs', () => ({
		template: `
			<ui-tabs>
				<ui-tab title="Tab 1">
					Tab 1 content
				</ui-tab>

				<ui-tab title="Tab 2">
					Tab 2 content
				</ui-tab>
			</ui-tabs>
		`,
	}));
