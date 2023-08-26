import AbstractCommand from '../abstract/AbstractCommand';

export default class DeleteLogicallyCommand extends AbstractCommand {
	/**
	 * Creates an instance of DeleteLogicallyCommand
	 *
	 * @param {AbstractController} controller - An instance of AbstractController
	 */
	constructor(controller) {
		super();
		this.controller = controller;
	}

	async execute(req, res, next) {
		await this.controller.deleteLogically(req, res, next);
	}
}
