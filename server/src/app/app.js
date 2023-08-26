import express from 'express';
import cors from 'cors';
import '../database';

//Middlewares
import transactionMiddleware from './global/middlewares/transactions';
import errorTreatmentMiddleware from './global/middlewares/errorTreatment';

//Routes
import userRoutes from './packages/Users/routes.js';
import statusesRoutes from './packages/Statuses/routes';

class App {
	constructor() {
		this.server = express();
		this.middlewares();
		this.routes();
	}

	middlewares() {
		this.server.use(cors());
		this.server.use(express.json());
		this.server.use(transactionMiddleware);
		this.server.use(errorTreatmentMiddleware);
	}

	routes() {
		this.server.use('/app/user', userRoutes);
		this.server.use('/app/status', statusesRoutes);
	}
}

export default new App().server;
