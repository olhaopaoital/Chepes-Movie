import AbstractCommand from '../../../global/abstract/AbstractCommand';

export default class UpdatePasswordCommand extends AbstractCommand {
	/**
	 * Creates an instance of UpdatePasswordCommand
	 *
	 * @param {AbstractController} controller - An instance of AbstractController
	 */
	constructor(controller) {
		super();
		this.controller = controller;
	}

	async execute(req, res, next) {
		await this.controller.updatePassword(req, res, next);
	}
}
