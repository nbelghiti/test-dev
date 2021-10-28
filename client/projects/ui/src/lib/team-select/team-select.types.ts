export interface ISelectedTeamMember {
	limit: number;
	packageId: string;
	type: string;
}

export interface ISelectedTeam<T = ISelectedTeamMember> {
	members: T[];
	title: string;
	totalLimit: number;
}
