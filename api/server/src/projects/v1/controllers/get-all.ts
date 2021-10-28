import { PaginationHelper } from '@shared/helpers/pagination';
import { IPagination, IRequest, IResponse, INext } from '@shared/shared.types';
import { Op } from 'sequelize';
import Client from '../models/client.model';
import Location from '../models/location.model';
import ProjectGeneral from '../models/project-general.model';
import Project from '../models/project.model';

import { IProject } from '../projects.types';

export const getAllProjects = async (req: IRequest, res: IResponse, next: INext): Promise<IPagination<IProject>> => {
	const pageInfo = PaginationHelper.parseQuery(req.data.query);
	const query = {
		...(req.data.query.name && {
			[Op.or]: [{
				name: {
					[Op.iLike]: `%${req.data.query.name}%`,
				},
			}, {
				'$client.name$': {
					[Op.iLike]: `%${req.data.query.name}%`,
				},
			}],
		}),
		...(req.data.query.status && { status: req.data.query.status }),
	};
	const projects = await Project
		.findAll({
			...pageInfo,
			where: query,
			...(req.data.query.sort === 'updatedAt' && {
				order: [
					['updatedAt', 'DESC'],
				],
			}),
			...(req.data.query.sort === 'name' && {
				order: [
					['name', 'ASC'],
				],
			}),
			include: [
				{
					model: ProjectGeneral,
					where: {
						...(req.data.query.accType && { ACCType: req.data.query.accType }),
						...(req.data.query.accFormat && { ACCFormat: req.data.query.accFormat }),
					},
				},
				{
					model: Client,
					required: false,
					as: 'client',
				},
				{
					model: Location,
					...(req.data.query.location && { required: true }),
					...(!req.data.query.location && { required: false }),
					where: {
						...(req.data.query.location && { name: req.data.query.location }),
					},
				},
			],
		});
	const total = await Project.count({
		where: query,
	});

	return PaginationHelper.map(projects, total, '/v1/projects', req.data.query);
};
