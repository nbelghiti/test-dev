import {
	IAvailableDatalistUpdate,
	IDatalist,
	IDatalistItem,
	IDatalistItemGroup,
	IProjectDatalistUpdate
} from '~/repositories/datalists/services/datalists.types';
import { aFieldsMock } from '~/repositories/fields/services/fields.mock';

export const aDatalistItemMock: IDatalistItem = {
	id: 'item-1-id',
	ITEM_ID: 'item-1-item-id',
	name: 'item-1'
};

export const aDatalistItemGroupMock: IDatalistItemGroup = {
	id: 'itemGroup-1',
	name: 'itemGroup-1',
	items: [
		aDatalistItemMock.ITEM_ID
	],
};

export const aDatalistMock: IDatalist = {
	id: 'datalist-1',
	name: 'Cofimco',
	description: 'Description',
	datalistItemGroups: [
		aDatalistItemGroupMock,
	],
	versions: ['1.0.0'],
};

export const aDatalistsMock: IDatalist[] = [
	aDatalistMock,
	{
		id: 'datalist-2',
		name: 'Howden',
		description: 'Description',
		datalistItemGroups: [
			aDatalistItemGroupMock,
			{
				id: 'itemGroup-2',
				name: 'itemGroup-2',
				items: [
					aDatalistItemMock.ITEM_ID
				],
			}
		],
		versions: ['1.0.0'],
	}
];

export const aAvailableDatalistUpdatesMock: IAvailableDatalistUpdate[] = [{
	id: 'datalist-1',
	name: ''
}];

export const aProjectDatalistUpdateMock: IProjectDatalistUpdate = {
	versions: {
		current: '1.0.0',
		next: '1.1.0',
	},
	changes: {
		previousValues: [{
			id: 'some-component-id',
			name: 'some-component',
			description: 'some-component-description',
			fields: aFieldsMock,
		}],
		currentValues: [{
			id: 'some-component-id',
			name: 'some-component',
			description: 'some-component-description',
			fields: [{
				...aFieldsMock[0],
				nominalValue: 10,
			}],
		}],
	},
};

