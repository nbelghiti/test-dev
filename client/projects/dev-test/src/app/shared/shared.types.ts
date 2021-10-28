export enum KeyboardEventKeys {
	arrowLeft = 'ArrowLeft',
	arrowRight = 'ArrowRight',
}

export interface IBaseLink {
	type?: 'internal' | 'external';
	to: string | string[];
	label: string;
}
