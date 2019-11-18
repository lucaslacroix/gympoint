import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';
import PlanController from './app/controllers/PlanController';

import authMiddleware from './app/middlewares/auth';
import adminMiddleware from './app/middlewares/admin';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.use(adminMiddleware);

routes.post('/students', StudentController.store);

routes.delete('/plans/:planId', PlanController.delete);
routes.put('/plans/:planId', PlanController.update);
routes.post('/plans', PlanController.store);
routes.get('/plans', PlanController.index);

export default routes;
