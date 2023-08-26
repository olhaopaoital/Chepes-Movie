import AbstractCommand from '../../../global/abstract/AbstractCommand';

export default class GetByCpfCommand extends AbstractCommand {
	/**
	 * Creates an instance of GetByCpfCommand
	 *
	 * @param {AbstractController} controller - An instance of AbstractController
	 */
	constructor(controller) {
		super();
		this.controller = controller;
	}

	async execute(req, res, next) {
		await this.controller.getByCpf(req, res, next);
	}
}
