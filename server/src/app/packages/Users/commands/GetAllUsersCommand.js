import AbstractCommand from '../../../global/abstract/AbstractCommand';

export default class GetAllUsersCommand extends AbstractCommand {
	/**
	 * Creates an instance of GetAllUsersCommand
	 *
	 * @param {AbstractController} controller - An instance of AbstractController
	 */
	constructor(controller) {
		super();
		this.controller = controller;
	}

	async execute(req, res, next) {
		await this.controller.getAllUsers(req, res, next);
	}
}
