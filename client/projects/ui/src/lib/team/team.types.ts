export interface IMember {
	name: string;
	role?: string;
	myself?: boolean;
	email: string;
	type: string;
}
export interface ITeam {
	title: string;
	members: IMember[];
}
