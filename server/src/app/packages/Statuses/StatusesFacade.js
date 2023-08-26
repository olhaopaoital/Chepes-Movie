import AbstractFacade from '../../global/abstract/AbstractFacade';
import GetByCodeCommand from './commands/GetByCodeCommand';

export default class StatusesFacade extends AbstractFacade {
	constructor(StatusesController) {
		super(StatusesController);
		this.getByCode = this.getByCode.bind(this);
	}

	async getByCode(req, res, next) {
		try {
			const command = new GetByCodeCommand(this.controller);
			await command.execute(req, res, next);
		} catch (error) {
			this.handleError(res, error);
		}
	}
}
