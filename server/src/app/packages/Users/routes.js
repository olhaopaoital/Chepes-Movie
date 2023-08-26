import { Router } from 'express';

import UserFacade from './UserFacade';
import controller from '../../global/controllers/UserController';

const userRoutes = Router();
const facade = new UserFacade(controller);

userRoutes.post('/', facade.create);
userRoutes.get('/:cpf', facade.getByCpf);
userRoutes.get('/id/:id', facade.getById);

userRoutes.put('/', facade.update);
userRoutes.put('/password', facade.updatePassword);
userRoutes.delete('/', facade.deleteLogically);

export default userRoutes;
