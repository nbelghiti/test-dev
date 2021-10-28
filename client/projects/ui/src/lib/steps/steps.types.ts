export enum StepType {
	default = '',
	active = 'active',
	completed  = 'completed',
}

export interface IStep {
	title: string;
	description: string;
}
