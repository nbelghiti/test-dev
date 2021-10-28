export enum UIFieldType {
	calculated = 'calculated',
	manual = 'manual',
	external = 'external',
	datalist = 'datalist',
}

export interface UIField {
	id: string;
	description: string;
	nominalUnit: string;
	code: string;
	CAD_ID: string;
	type: UIFieldType;
	unitType: string;
}
