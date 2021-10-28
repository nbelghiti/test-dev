import { boolean, text } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { UIModule } from 'adb-ui';

storiesOf('Building blocks|Checkbox', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
			],
		}),
	)
	.add('default', () => ({
		template: `
			<ui-checkbox [indeterminate]="indeterminate" [label]="label"></ui-checkbox>
		`,
		props: {
			indeterminate: boolean('Indeterminate', false),
			label: text('Label', ''),
		}
	}));
