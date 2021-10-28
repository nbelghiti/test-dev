import { PermissionMiddleware } from '@shared/middleware/permission';
import { IRequest, IResponse, INext } from '@shared/shared.types';

export const projectAdminByProjectParamMock = jest.spyOn(PermissionMiddleware, 'projectAdminByProjectParam')
	.mockImplementation((req: IRequest, res: IResponse, next: INext) => Promise.resolve(next()));

export const projectAdminByProjectParamMockRestore = () => projectAdminByProjectParamMock.mockRestore();
