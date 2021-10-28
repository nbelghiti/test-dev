import Team from '../models/team.model';
import Member from '../models/member.model';

export const findTeam = (id: string): Promise<Team> => Team.findOne({
	where: { id },
	include: [Member],
});
