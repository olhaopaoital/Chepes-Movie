import { Router } from 'express';

import StatusesFacade from './StatusesFacade';
import StatusesController from '../../global/controllers/StatusesController';

const controller = StatusesController;

const statusesRoutes = Router();
const facade = new StatusesFacade(controller);

statusesRoutes.get('/:code', facade.getByCode);

export default statusesRoutes;
