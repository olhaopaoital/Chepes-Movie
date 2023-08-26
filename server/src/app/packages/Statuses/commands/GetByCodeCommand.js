import AbstractCommand from '../../../global/abstract/AbstractCommand';

export default class GetByCodeCommand extends AbstractCommand {
	/**
	 * Creates an instance of GetByCodeCommand
	 *
	 * @param {AbstractController} controller - An instance of AbstractController
	 */
	constructor(controller) {
		super();
		this.controller = controller;
	}

	async execute(req, res, next) {
		await this.controller.getByCode(req, res, next);
	}
}
