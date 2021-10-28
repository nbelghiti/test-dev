import { NotFoundError } from '@shared/helpers/error';
import { INext, IRequest, IResponse } from '@shared/shared.types';
import Member from '@teams/v1/models/member.model';
import Team from '@teams/v1/models/team.model';

import Client from '../models/client.model';
import Location from '../models/location.model';
import ProjectGeneral from '../models/project-general.model';
import Project from '../models/project.model';
import { IProject } from '../projects.types';

export const getProjectById = async (req: IRequest, res: IResponse, next: INext): Promise<IProject> => {
	const project = await Project
		.findOne({
			where: { id: req.data.params.id },
			include: [
				ProjectGeneral,
				Client,
				Location,
				{
					model: Team,
					include: [
						Member,
					],
				},
			],
		});

	if (!project) {
		throw new NotFoundError();
	}

	return project.toJSON() as IProject;
};
