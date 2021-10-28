import { select } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { IconName, IconSize, IconType, UIModule } from 'adb-ui';

storiesOf('Building blocks|Icon', module)
	.addDecorator(
		moduleMetadata({
			imports: [
				UIModule,
			],
		}),
	)
	.add('default', () => ({
		template: `
			<div style="margin-bottom: 1rem">
				<ui-icon style="margin-right: .5rem" name="{{iconName}}" type="{{IconType.success}}" size="{{IconSize.large}}"></ui-icon>
				<ui-icon style="margin-right: .5rem" name="{{iconName}}" type="{{IconType.warn}}" size="{{IconSize.large}}"></ui-icon>
				<ui-icon style="margin-right: .5rem" name="{{iconName}}" type="{{IconType.error}}" size="{{IconSize.large}}"></ui-icon>
				<ui-icon style="margin-right: .5rem" name="{{iconName}}" type="{{IconType.info}}" size="{{IconSize.large}}"></ui-icon>
			</div>
			<div style="margin-bottom: 1rem">
				<ui-icon style="margin-right: .5rem" name="{{iconName}}" type="{{IconType.success}}" size="{{IconSize.small}}"></ui-icon>
				<ui-icon style="margin-right: .5rem" name="{{iconName}}" type="{{IconType.warn}}" size="{{IconSize.small}}"></ui-icon>
				<ui-icon style="margin-right: .5rem" name="{{iconName}}" type="{{IconType.error}}" size="{{IconSize.small}}"></ui-icon>
				<ui-icon style="margin-right: .5rem" name="{{iconName}}" type="{{IconType.info}}" size="{{IconSize.small}}"></ui-icon>
			</div>
		`,
		props: {
			iconName: select('Icon', IconName as any, IconName.book),
			IconSize: IconSize,
			IconType: IconType,
		},
	}));
